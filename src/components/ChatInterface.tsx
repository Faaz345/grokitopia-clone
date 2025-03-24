
import { useState, useRef, useEffect } from "react";
import { ChatMessage, Message, MessageRole } from "./ChatMessage";
import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import { ArrowUp, Plus, RefreshCw } from "lucide-react";

const sampleMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I'm Grok, an AI assistant designed to help with your questions. How can I assist you today?",
    timestamp: new Date(),
  },
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Auto-focus input field on load
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  // Auto-resize textarea based on content
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
  };

  const resetTextareaHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;
    
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    resetTextareaHeight();
    setIsLoading(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      // For demo purposes, generate a simple response
      const aiResponse: Message = {
        id: uuidv4(),
        role: "assistant",
        content: generateResponse(inputValue.trim()),
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 500);
  };

  const startNewChat = () => {
    setMessages(sampleMessages);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-6xl w-full mx-auto">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto space-y-2 pb-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={message.id}
            message={message}
            isLast={index === messages.length - 1 && message.role === "assistant"}
          />
        ))}
        
        {isLoading && (
          <div className="flex w-full max-w-4xl mx-auto px-4 py-6">
            <div className="glass-card rounded-2xl px-5 py-4 max-w-[85%] md:max-w-[75%]">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={endOfMessagesRef} />
      </div>
      
      {/* Input area */}
      <div className="pt-4 pb-8 px-4">
        <div className="glass-card rounded-2xl p-4 relative max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="flex items-end">
            <button
              type="button"
              onClick={startNewChat}
              className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Start new chat"
            >
              <Plus size={18} />
            </button>
            
            <div className="flex-1 relative mx-2">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={handleTextareaChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Message Grok..."
                className="w-full py-2.5 px-4 bg-transparent text-foreground placeholder:text-muted-foreground resize-none outline-none min-h-[44px] max-h-[200px] overflow-y-auto"
                rows={1}
              />
            </div>
            
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className={cn(
                "p-2.5 rounded-xl transition-all duration-200 flex items-center justify-center",
                inputValue.trim() && !isLoading
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-muted-foreground"
              )}
              aria-label="Send message"
            >
              {isLoading ? (
                <RefreshCw size={18} className="animate-spin" />
              ) : (
                <ArrowUp size={18} />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Simple response generator for demo purposes
function generateResponse(input: string): string {
  // Default responses
  const responses = [
    "I understand your question about \"" + input + "\". This is a fascinating topic that involves several considerations.",
    "Thanks for asking about \"" + input + "\". Let me provide you with some insights on this matter.",
    "\"" + input + "\" is an interesting query. Here's what I can tell you about it.",
    "I've processed your question about \"" + input + "\". Here's what I think could be helpful information.",
    "Regarding \"" + input + "\", I can offer the following perspective that might be valuable.",
  ];
  
  if (input.toLowerCase().includes("hello") || input.toLowerCase().includes("hi") || input.toLowerCase().includes("hey")) {
    return "Hello there! How can I assist you today?";
  }
  
  if (input.toLowerCase().includes("who are you") || input.toLowerCase().includes("what are you")) {
    return "I'm a clone of Grok, an AI assistant designed to be helpful, harmless, and honest. I'm here to assist with a wide range of questions and tasks. How can I help you today?";
  }
  
  if (input.toLowerCase().includes("thank")) {
    return "You're welcome! I'm always here to help. Is there anything else you'd like to know?";
  }
  
  // Return a random response for other inputs
  return responses[Math.floor(Math.random() * responses.length)];
}

export default ChatInterface;
