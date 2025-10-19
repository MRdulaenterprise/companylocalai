import type { Providers, ClientOptions } from '@company-local-ai/agents';
import type { AgentModelParameters } from 'company-local-ai-data-provider';
import type { OpenAIConfiguration } from './openai';

export type RunLLMConfig = {
  provider: Providers;
  streaming: boolean;
  streamUsage: boolean;
  usage?: boolean;
  configuration?: OpenAIConfiguration;
} & AgentModelParameters &
  ClientOptions;
