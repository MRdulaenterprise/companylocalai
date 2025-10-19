import { company-local-ai } from 'company-local-ai-data-provider';
import type { DynamicSettingProps } from 'company-local-ai-data-provider';

type Company Local AIKeys = keyof typeof company-local-ai;

type Company Local AIParams = {
  modelOptions: Omit<NonNullable<DynamicSettingProps['conversation']>, Company Local AIKeys>;
  resendFiles: boolean;
  promptPrefix?: string | null;
  maxContextTokens?: number;
  fileTokenLimit?: number;
  modelLabel?: string | null;
};

/**
 * Separates Company Local AI-specific parameters from model options
 * @param options - The combined options object
 */
export function extractCompany Local AIParams(
  options?: DynamicSettingProps['conversation'],
): Company Local AIParams {
  if (!options) {
    return {
      modelOptions: {} as Omit<NonNullable<DynamicSettingProps['conversation']>, Company Local AIKeys>,
      resendFiles: company-local-ai.resendFiles.default as boolean,
    };
  }

  const modelOptions = { ...options };

  const resendFiles =
    (delete modelOptions.resendFiles, options.resendFiles) ??
    (company-local-ai.resendFiles.default as boolean);
  const promptPrefix = (delete modelOptions.promptPrefix, options.promptPrefix);
  const maxContextTokens = (delete modelOptions.maxContextTokens, options.maxContextTokens);
  const fileTokenLimit = (delete modelOptions.fileTokenLimit, options.fileTokenLimit);
  const modelLabel = (delete modelOptions.modelLabel, options.modelLabel);

  return {
    modelOptions: modelOptions as Omit<
      NonNullable<DynamicSettingProps['conversation']>,
      Company Local AIKeys
    >,
    maxContextTokens,
    fileTokenLimit,
    promptPrefix,
    resendFiles,
    modelLabel,
  };
}
