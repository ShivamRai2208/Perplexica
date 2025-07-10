// src/lib/providers/mistral.ts

import { ChatOpenAI } from '@langchain/openai';
import { getMistralApiKey } from '../config';
import { ChatModel } from '.';
import { BaseChatModel } from '@langchain/core/language_models/chat_models';

export const PROVIDER_INFO = {
  key: 'mistral',
  displayName: 'Mistral',
};

export const loadMistralChatModels = async () => {
  const mistralApiKey = getMistralApiKey();
  if (!mistralApiKey) return {};

  const supportedModels = ['mistral-tiny', 'mistral-small', 'mistral-medium'];
  const chatModels: Record<string, ChatModel> = {};

  supportedModels.forEach((modelName) => {
    chatModels[modelName] = {
      displayName: modelName,
      model: new ChatOpenAI({
        openAIApiKey: mistralApiKey,
        modelName,
        temperature: 0.7,
        configuration: {
          baseURL: 'https://api.mistral.ai/v1', // Mistral-compatible OpenAI API
        },
      }) as unknown as BaseChatModel,
    };
  });

  return chatModels;
};
