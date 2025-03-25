import React from 'react';

interface ChatMessageProps {
  message: {
    role: string;
    content: string;
    model?: string;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-3/4 p-3 rounded-lg ${
        isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
      }`}>
        {!isUser && message.model && (
          <div className="text-xs text-gray-500 mb-1">
            Model: {message.model}
          </div>
        )}
        <div>{message.content}</div>
      </div>
    </div>
  );
};

export default ChatMessage; 