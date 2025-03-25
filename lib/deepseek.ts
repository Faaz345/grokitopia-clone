export class DeepseekAPI {
  private apiKey: string;
  private baseUrl: string = 'https://api.deepseek.com/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async createChatCompletion(options: {
    messages: any[];
    model: string;
    temperature?: number;
    max_tokens?: number;
  }) {
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(options),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create chat completion');
    }

    return await response.json();
  }
} 