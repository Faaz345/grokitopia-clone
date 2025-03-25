import React, { useState, useRef, useEffect } from 'react';

export const modelOptions = [
  {
    value: "gpt-3.5-turbo",
    label: "GPT-3.5 Turbo",
    description: "Fast and efficient model for general chat",
    isFree: false,
  },
  {
    value: "gpt-4",
    label: "GPT-4",
    description: "Advanced reasoning and language understanding",
    isFree: false,
  },
  {
    value: "gemini-pro",
    label: "Gemini Pro",
    description: "Google's Gemini Pro model for general purpose chat",
    isFree: true,
  },
  {
    value: "deepseek-r1",
    label: "DeepSeek R1",
    description: "Free DeepSeek Coder model for coding assistance",
    isFree: true,
  },
  // Add other models as needed
];

interface ModelSelectorProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel, onModelChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Find the selected model details
  const selectedModelDetails = modelOptions.find(m => m.value === selectedModel) || modelOptions[0];
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="font-medium">{selectedModelDetails.label}</span>
          {selectedModelDetails.isFree && (
            <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
              Free
            </span>
          )}
        </div>
        <svg 
          className={`w-5 h-5 ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="py-1">
            {modelOptions.map((model) => (
              <button
                key={model.value}
                type="button"
                className={`flex flex-col w-full px-4 py-2 text-left hover:bg-gray-100 ${model.value === selectedModel ? 'bg-blue-50' : ''}`}
                onClick={() => {
                  onModelChange(model.value);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{model.label}</span>
                  {model.isFree && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                      Free
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-gray-500">{model.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelSelector; 