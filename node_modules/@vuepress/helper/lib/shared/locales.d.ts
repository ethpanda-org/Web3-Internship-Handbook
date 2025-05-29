import type { LocaleData } from 'vuepress/shared';
/**
 * Generate locale config with exact locale data
 */
export type ExactLocaleConfig<T extends LocaleData = LocaleData> = Record<string, T>;
