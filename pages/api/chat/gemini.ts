import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, options } = req.body;
    
    // Initialize the Google Generative AI client
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    // Extract the last user message (this is what we'll send to Gemini)
    const lastUserMessage = messages[messages.length - 1];
    
    // Get the chat history (all messages except the last one)
    const history = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));
    
    // Create a chat with history
    const chat = model.startChat({
      history: history,
      generationConfig: {
        temperature: options?.temperature || 0.7,
        maxOutputTokens: options?.max_tokens || 2000,
      },
    });
    
    // Send the last message and get the response
    const result = await chat.sendMessage(lastUserMessage.content);
    const responseText = result.response.text();
    
    return res.status(200).json({ 
      choices: [{ message: { content: responseText } }] 
    });
  } catch (error) {
    console.error('Gemini API error:', error);
    return res.status(500).json({ 
      error: 'Failed to get response from Gemini',
      details: error.message 
    });
  }
} 