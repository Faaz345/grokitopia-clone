export async function sendChatRequest(messages, modelId, options = {}) {
  let endpoint;
  let requestBody;
  
  switch(modelId) {
    case 'deepseek-r1':
      endpoint = '/api/chat/deepseek';
      requestBody = {
        messages,
        options,
        // Add any DeepSeek-specific parameters here
      };
      break;
    case 'gemini-pro':
      endpoint = '/api/chat/gemini';
      requestBody = {
        messages,
        options,
        // Add any Gemini-specific parameters here
      };
      break;
    default:
      // Your existing code for other models
      // ... existing code ...
  }
  
  // Continue with your fetch logic
  // ... existing code ...
} 