import type { MarkdownHintPluginLocaleData } from '@vuepress/plugin-markdown-hint';
import type { LocaleConfig } from 'vuepress/shared';
import type { DefaultThemeData } from '../../shared/index.js';
/**
 * Resolve options for @vuepress/plugin-markdown-container
 *
 * For custom containers default title
 */
export declare const resolveMarkdownHintLocales: (localeOptions: DefaultThemeData) => LocaleConfig<MarkdownHintPluginLocaleData>;
