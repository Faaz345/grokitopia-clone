import type { NextApiRequest, NextApiResponse } from 'next';
import { DeepseekAPI } from '../../../lib/deepseek'; // You'll need to create this

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, options } = req.body;
    
    // Initialize the DeepSeek API client
    const deepseekClient = new DeepseekAPI(process.env.DEEPSEEK_API_KEY);
    
    // Send the request to DeepSeek
    const response = await deepseekClient.createChatCompletion({
      messages,
      model: 'deepseek-coder-r1', // Adjust based on actual model ID
      temperature: options.temperature || 0.7,
      max_tokens: options.max_tokens || 2000,
    });
    
    return res.status(200).json(response);
  } catch (error) {
    console.error('DeepSeek API error:', error);
    return res.status(500).json({ error: 'Failed to get response from DeepSeek' });
  }
} 