import type { TConfig } from 'company-local-ai-data-provider';

export type TCustomEndpointsConfig = Partial<{ [key: string]: Omit<TConfig, 'order'> }>;
