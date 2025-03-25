import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, model, options } = req.body;
    
    // Determine which API endpoint to use based on the selected model
    let endpoint = '';
    
    switch (model) {
      case 'gemini-pro':
        endpoint = '/api/chat/gemini';
        break;
      case 'deepseek-r1':
        endpoint = '/api/chat/deepseek';
        break;
      case 'gpt-3.5-turbo':
      case 'gpt-4':
        endpoint = '/api/chat/openai'; // Assuming you have an OpenAI endpoint
        break;
      default:
        endpoint = '/api/chat/openai'; // Default to OpenAI
    }
    
    // For testing purposes, just return a mock response
    return res.status(200).json({
      choices: [
        {
          message: {
            content: `This is a response from the ${model} model to: "${messages[messages.length - 1].content}"`,
          },
        },
      ],
    });
    
    // Uncomment this when your actual API routes are working
    /*
    // Forward the request to the appropriate endpoint
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const apiResponse = await fetch(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages, options }),
    });
    
    const data = await apiResponse.json();
    
    if (!apiResponse.ok) {
      throw new Error(data.error || 'Failed to get response from model');
    }
    
    return res.status(200).json(data);
    */
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ 
      error: 'Failed to get response',
      details: error.message 
    });
  }
} 