import ModelSelector, { modelOptions } from './ModelSelector';
import { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

// Define the message type
interface Message {
  role: string;
  content: string;
  model?: string;
}

const Chat = () => {
  const [selectedModel, setSelectedModel] = useState('gpt-3.5-turbo');
  const [messages, setMessages] = useState<Message[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set up video scaling on mount
  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current) {
        // Calculate scaling to cover the entire container
        const container = videoRef.current.parentElement;
        if (container) {
          const containerRatio = container.clientWidth / container.clientHeight;
          const videoRatio = videoRef.current.videoWidth / videoRef.current.videoHeight;
          
          if (containerRatio > videoRatio) {
            // Container is wider than video
            videoRef.current.style.width = '100%';
            videoRef.current.style.height = 'auto';
            // Center vertically
            const heightDiff = (container.clientHeight - videoRef.current.clientHeight) / 2;
            videoRef.current.style.transform = `translateY(${heightDiff > 0 ? heightDiff : 0}px)`;
          } else {
            // Container is taller than video
            videoRef.current.style.width = 'auto';
            videoRef.current.style.height = '100%';
            // Center horizontally
            const widthDiff = (container.clientWidth - videoRef.current.clientWidth) / 2;
            videoRef.current.style.transform = `translateX(${widthDiff > 0 ? widthDiff : 0}px)`;
          }
        }
      }
    };

    // Listen for video metadata to load before scaling
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', handleResize);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', handleResize);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
  };

  const sendMessage = async (message: string) => {
    // Create a new user message
    const userMessage = {
      role: 'user',
      content: message,
    };
    
    // Add it to messages
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    
    try {
      // Send request to the API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedMessages,
          model: selectedModel,
          options: {
            temperature: 0.7,
          }
        }),
      });
      
      const data = await response.json();
      
      // Add the model information to the assistant message
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content,
        model: selectedModel,
      };
      
      setMessages([...updatedMessages, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video 
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover scale-[2.0] transform-gpu animate-[slowZoom_30s_ease-in-out_infinite]" 
          src="/videos/background.mp4"
        >
          Your browser does not support the video tag.
        </video>
        {/* Adjusted overlay */}
        <div className="absolute inset-0 bg-white/55 backdrop-blur-[3px]"></div>
      </div>

      {/* Chat Content (with higher z-index to appear above video) */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Model selector header */}
        <div className="p-4 border-b bg-white/80">
          <div className="max-w-4xl mx-auto">
            <div className="mb-2 font-medium text-gray-700">Select AI Model:</div>
            
            {/* Enhanced Model Selector Component */}
            <ModelSelector 
              selectedModel={selectedModel}
              onModelChange={handleModelChange}
            />
          </div>
        </div>
        
        {/* Chat content area */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Messages display */}
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-800 bg-white/60 p-6 rounded-lg shadow-lg">
                <p className="mb-2 text-lg font-semibold">Select a model and start chatting</p>
                <p className="text-sm">Free models available: Gemini Pro and DeepSeek R1</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Message input */}
        <div className="p-4 border-t bg-white/80">
          {/* Input form */}
          <form onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const input = form.elements.namedItem('message') as HTMLInputElement;
            if (input.value.trim()) {
              sendMessage(input.value);
              input.value = '';
            }
          }}>
            <div className="flex max-w-4xl mx-auto">
              <input
                name="message"
                className="flex-1 p-2 border rounded-l-md focus:outline-none bg-white"
                placeholder="Type your message..."
              />
              <button 
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat; 