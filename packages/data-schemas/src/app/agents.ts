import { EModelEndpoint, agentsEndpointSchema } from 'company-local-ai-data-provider';
import type { TCustomConfig, TAgentsEndpoint } from 'company-local-ai-data-provider';

/**
 * Sets up the Agents configuration from the config (`company-local-ai.yaml`) file.
 * If no agents config is defined, uses the provided defaults or parses empty object.
 *
 * @param config - The loaded custom configuration.
 * @param [defaultConfig] - Default configuration from getConfigDefaults.
 * @returns The Agents endpoint configuration.
 */
export function agentsConfigSetup(
  config: Partial<TCustomConfig>,
  defaultConfig?: Partial<TAgentsEndpoint>,
): Partial<TAgentsEndpoint> {
  const agentsConfig = config?.endpoints?.[EModelEndpoint.agents];

  if (!agentsConfig) {
    return defaultConfig || agentsEndpointSchema.parse({});
  }

  const parsedConfig = agentsEndpointSchema.parse(agentsConfig);
  return parsedConfig;
}
