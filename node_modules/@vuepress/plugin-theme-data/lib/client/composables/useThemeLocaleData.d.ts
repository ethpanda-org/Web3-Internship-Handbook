import type { ComputedRef, InjectionKey } from 'vue';
import type { RouteLocale } from 'vuepress/client';
import type { LocaleData } from 'vuepress/shared';
import type { ThemeData } from '../../shared/index.js';
export type ThemeLocaleDataRef<T extends LocaleData = LocaleData> = ComputedRef<T>;
export declare const themeLocaleDataSymbol: InjectionKey<ThemeLocaleDataRef>;
export declare const useThemeLocaleData: <T extends ThemeData = ThemeData>() => ThemeLocaleDataRef<T>;
/**
 * Merge the locales fields to the root fields
 * according to the route path
 */
export declare const resolveThemeLocaleData: (theme: ThemeData, routeLocale: RouteLocale) => ThemeData;
