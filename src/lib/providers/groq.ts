import { ChatOpenAI } from '@langchain/openai';
import { BaseChatModel } from '@langchain/core/language_models/chat_models';
import { getGroqApiKey } from '../config';
import { ChatModel } from '.';

export const PROVIDER_INFO = {
  key: 'groq',
  displayName: 'Groq',
};

export const loadGroqChatModels = async (): Promise<Record<string, ChatModel>> => {
  const groqApiKey = getGroqApiKey();
  if (!groqApiKey) return {};

  try {
    const res = await fetch('https://api.groq.com/openai/v1/models', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (!data?.data || !Array.isArray(data.data)) {
      console.error('Invalid response from Groq API:', data);
      return {};
    }

    const chatModels: Record<string, ChatModel> = {};

    for (const model of data.data) {
      chatModels[model.id] = {
        displayName: model.id,
        model: new ChatOpenAI({
          openAIApiKey: groqApiKey,
          modelName: model.id,
          temperature: 0.7,
          configuration: {
            baseURL: 'https://api.groq.com/openai/v1',
          },
        }) as unknown as BaseChatModel,
      };
    }

    return chatModels;
  } catch (err) {
    console.error(`Error loading Groq models: ${err}`);
    return {};
  }
};
