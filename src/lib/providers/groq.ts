import { ChatOpenAI } from '@langchain/openai';
import { getGroqApiKey } from '../config';
import { ChatModel } from '.';
import { BaseChatModel } from '@langchain/core/language_models/chat_models';

export const PROVIDER_INFO = {
  key: 'groq',
  displayName: 'Groq',
};

export const loadGroqChatModels = async () => {
  const groqApiKey = getGroqApiKey();
  if (!groqApiKey) return {};

  const chatModels: Record<string, ChatModel> = {};

  // Only load Mixtral model
  const modelId = 'mixtral-8x7b-32768';

  chatModels[modelId] = {
    displayName: 'Mixtral 8x7B (Groq)',
    model: new ChatOpenAI({
      openAIApiKey: groqApiKey,
      modelName: modelId,
      temperature: 0.7,
      configuration: {
        baseURL: 'https://api.groq.com/openai/v1',
      },
    }) as unknown as BaseChatModel,
  };

  return chatModels;
};
