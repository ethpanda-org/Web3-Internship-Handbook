import { addViteOptimizeDepsExclude } from '@vuepress/helper';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { copyCodePlugin } from '@vuepress/plugin-copy-code';
import { gitPlugin } from '@vuepress/plugin-git';
import { linksCheckPlugin } from '@vuepress/plugin-links-check';
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint';
import { markdownTabPlugin } from '@vuepress/plugin-markdown-tab';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
import { nprogressPlugin } from '@vuepress/plugin-nprogress';
import { palettePlugin } from '@vuepress/plugin-palette';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
import { seoPlugin } from '@vuepress/plugin-seo';
import { sitemapPlugin } from '@vuepress/plugin-sitemap';
import { themeDataPlugin } from '@vuepress/plugin-theme-data';
import { isPlainObject } from 'vuepress/shared';
import { fs, getDirname, path } from 'vuepress/utils';
import { assignDefaultLocaleOptions, resolveMarkdownHintLocales, } from './utils/index.js';
const __dirname = import.meta.dirname || getDirname(import.meta.url);
export const defaultTheme = ({ hostname, themePlugins = {}, ...localeOptions } = {}) => {
    assignDefaultLocaleOptions(localeOptions);
    return {
        name: '@vuepress/theme-default',
        templateBuild: path.resolve(__dirname, '../../templates/build.html'),
        alias: {
            // use alias to make all components replaceable
            ...Object.fromEntries(fs
                .readdirSync(path.resolve(__dirname, '../client/components'))
                .filter((file) => file.endsWith('.vue'))
                .map((file) => [
                `@theme/${file}`,
                path.resolve(__dirname, '../client/components', file),
            ])),
            // use alias to make all composables replaceable
            ...Object.fromEntries(fs
                .readdirSync(path.resolve(__dirname, '../client/composables'))
                .filter((file) => file.endsWith('.js'))
                .map((file) => [
                `@theme/${file.substring(0, file.length - 3)}`,
                path.resolve(__dirname, '../client/composables', file),
            ])),
            // use alias to make all utils replaceable
            ...Object.fromEntries(fs
                .readdirSync(path.resolve(__dirname, '../client/utils'))
                .filter((file) => file.endsWith('.js'))
                .map((file) => [
                `@theme/${file.substring(0, file.length - 3)}`,
                path.resolve(__dirname, '../client/utils', file),
            ])),
        },
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
        extendsBundlerOptions: (bundlerOptions, app) => {
            // ensure theme alias is not optimized by Vite
            addViteOptimizeDepsExclude(bundlerOptions, app, '@theme');
        },
        extendsPage: (page) => {
            // save relative file path into page data to generate edit link
            page.data.filePathRelative = page.filePathRelative;
            // save title into route meta to generate navbar and sidebar
            page.routeMeta.title = page.title;
        },
        plugins: [
            // @vuepress/plugin-active-header-link
            (themePlugins.activeHeaderLinks ?? true)
                ? activeHeaderLinksPlugin({
                    // should greater than page transition duration
                    delay: 300,
                })
                : [],
            // @vuepress/plugin-back-to-top
            (themePlugins.backToTop ?? true)
                ? backToTopPlugin(isPlainObject(themePlugins.backToTop) ? themePlugins.backToTop : {})
                : [],
            // @vuepress/plugin-copy-code
            (themePlugins.copyCode ?? true)
                ? copyCodePlugin({
                    ...(isPlainObject(themePlugins.copyCode)
                        ? themePlugins.copyCode
                        : {}),
                })
                : [],
            // @vuepress/plugin-markdown-container
            (themePlugins.hint ?? true)
                ? markdownHintPlugin({
                    locales: resolveMarkdownHintLocales(localeOptions),
                    ...(isPlainObject(themePlugins.hint) ? themePlugins.hint : {}),
                })
                : [],
            // @vuepress/plugin-git
            (themePlugins.git ?? true)
                ? gitPlugin({
                    createdTime: false,
                    updatedTime: localeOptions.lastUpdated ?? true,
                    changelog: { repoUrl: localeOptions.repo || '' },
                    ...(isPlainObject(themePlugins.git) ? themePlugins.git : {}),
                })
                : [],
            // @vuepress/plugin-links-check
            (themePlugins.linksCheck ?? true)
                ? linksCheckPlugin(isPlainObject(themePlugins.linksCheck)
                    ? themePlugins.linksCheck
                    : {})
                : [],
            // @vuepress/plugin-medium-zoom
            (themePlugins.mediumZoom ?? true) ? mediumZoomPlugin() : [],
            // @vuepress/plugin-nprogress
            (themePlugins.nprogress ?? true) ? nprogressPlugin() : [],
            // @vuepress/plugin-palette
            palettePlugin({ preset: 'sass' }),
            // @vuepress/plugin-prismjs
            (themePlugins.prismjs ?? true)
                ? prismjsPlugin(isPlainObject(themePlugins.prismjs) ? themePlugins.prismjs : {})
                : [],
            // @vuepress/plugin-seo
            hostname && (themePlugins.seo ?? true)
                ? seoPlugin({
                    hostname,
                    ...(isPlainObject(themePlugins.seo) ? themePlugins.seo : {}),
                })
                : [],
            // @vuepress/plugin-sitemap
            hostname && (themePlugins.sitemap ?? true)
                ? sitemapPlugin({
                    hostname,
                    ...(isPlainObject(themePlugins.sitemap)
                        ? themePlugins.sitemap
                        : {}),
                })
                : [],
            // @vuepress/plugin-markdown-tab
            (themePlugins.tab ?? true)
                ? markdownTabPlugin(isPlainObject(themePlugins.tab)
                    ? themePlugins.tab
                    : { codeTabs: true, tabs: true })
                : [],
            // @vuepress/plugin-theme-data
            themeDataPlugin({ themeData: localeOptions }),
        ],
    };
};
