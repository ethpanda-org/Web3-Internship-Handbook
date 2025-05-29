import type { Theme } from 'vuepress/core';
import type { DefaultThemeLocaleOptions } from '../shared/index.js';
import type { DefaultThemePluginsOptions } from './typings.js';
export interface DefaultThemeOptions extends DefaultThemeLocaleOptions {
    /**
     * deployed hostname
     */
    hostname?: string;
    /**
     * To avoid confusion with the root `plugins` option,
     * we use `themePlugins`
     */
    themePlugins?: DefaultThemePluginsOptions;
}
export declare const defaultTheme: ({ hostname, themePlugins, ...localeOptions }?: DefaultThemeOptions) => Theme;
