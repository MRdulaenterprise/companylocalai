import { logger } from '@company-local-ai/data-schemas';
import { EModelEndpoint, removeNullishValues } from 'company-local-ai-data-provider';
import type { TCustomConfig, TEndpoint, TTransactionsConfig } from 'company-local-ai-data-provider';
import type { AppConfig } from '@company-local-ai/data-schemas';
import { isEnabled, normalizeEndpointName } from '~/utils';

/**
 * Retrieves the balance configuration object
 * */
export function getBalanceConfig(appConfig?: AppConfig): Partial<TCustomConfig['balance']> | null {
  const isLegacyEnabled = isEnabled(process.env.CHECK_BALANCE);
  const startBalance = process.env.START_BALANCE;
  /** @type {} */
  const config: Partial<TCustomConfig['balance']> = removeNullishValues({
    enabled: isLegacyEnabled,
    startBalance: startBalance != null && startBalance ? parseInt(startBalance, 10) : undefined,
  });
  if (!appConfig) {
    return config;
  }
  return { ...config, ...(appConfig?.['balance'] ?? {}) };
}

/**
 * Retrieves the transactions configuration object
 * */
export function getTransactionsConfig(appConfig?: AppConfig): Partial<TTransactionsConfig> {
  const defaultConfig: TTransactionsConfig = { enabled: true };

  if (!appConfig) {
    return defaultConfig;
  }

  const transactionsConfig = appConfig?.['transactions'] ?? defaultConfig;
  const balanceConfig = getBalanceConfig(appConfig);

  // If balance is enabled but transactions are disabled, force transactions to be enabled
  // and log a warning
  if (balanceConfig?.enabled && !transactionsConfig.enabled) {
    logger.warn(
      'Configuration warning: transactions.enabled=false is incompatible with balance.enabled=true. ' +
        'Transactions will be enabled to ensure balance tracking works correctly.',
    );
    return { ...transactionsConfig, enabled: true };
  }

  return transactionsConfig;
}

export const getCustomEndpointConfig = ({
  endpoint,
  appConfig,
}: {
  endpoint: string | EModelEndpoint;
  appConfig?: AppConfig;
}): Partial<TEndpoint> | undefined => {
  if (!appConfig) {
    throw new Error(`Config not found for the ${endpoint} custom endpoint.`);
  }

  const customEndpoints = appConfig.endpoints?.[EModelEndpoint.custom] ?? [];
  return customEndpoints.find(
    (endpointConfig) => normalizeEndpointName(endpointConfig.name) === endpoint,
  );
};

export function hasCustomUserVars(appConfig?: AppConfig): boolean {
  const mcpServers = appConfig?.mcpConfig;
  return Object.values(mcpServers ?? {}).some((server) => server?.customUserVars);
}
