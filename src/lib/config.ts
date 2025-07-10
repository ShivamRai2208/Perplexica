// src/lib/config.ts

export const getOpenaiApiKey = () => process.env.OPENAI_API_KEY || '';
export const getCustomOpenaiApiKey = () => '';
export const getCustomOpenaiApiUrl = () => '';
export const getCustomOpenaiModelName = () => '';
export const getGroqApiKey = () => '';
export const getAnthropicApiKey = () => '';
export const getGeminiApiKey = () => '';
export const getSearxngApiEndpoint = () => process.env.SEARXNG_API_URL || '';
export const getOllamaApiEndpoint = () => '';
export const getDeepseekApiKey = () => '';
export const getAimlApiKey = () => '';
export const getLMStudioApiEndpoint = () => '';

// ✅ Fixes for missing exports
export const getKeepAlive = () => process.env.KEEP_ALIVE || '5m';
export const getSimilarityMeasure = () => process.env.SIMILARITY_MEASURE || 'cosine';

export const updateConfig = () => {
  console.warn('updateConfig is not available in production.');
};
