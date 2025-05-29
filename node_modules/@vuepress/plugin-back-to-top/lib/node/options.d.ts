import type { LocaleConfig } from 'vuepress/shared';
import type { BackToTopPluginLocaleData } from '../shared/index.js';
export interface BackToTopPluginOptions {
    /**
     * Scroll threshold distance to display back to top button (in pixels)
     *
     * 滚动距离阈值，用于显示返回顶部按钮 (单位: 像素)
     *
     * @default 100
     */
    threshold?: number;
    /**
     * Whether display scroll progress
     *
     * 是否显示滚动进度
     *
     * @default true
     */
    progress?: boolean;
    /**
     * Back to top locales
     *
     * 返回顶部插件的多语言配置
     */
    locales?: LocaleConfig<BackToTopPluginLocaleData>;
}
