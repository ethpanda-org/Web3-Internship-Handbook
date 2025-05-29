import type { App } from 'vuepress/core';
import type { SitemapImageOption, SitemapLinkOption, SitemapNewsOption, SitemapPluginOptions, SitemapVideoOption } from '../typings/index.js';
export interface SitemapInfo {
    lastmod?: string;
    changefreq?: string;
    priority?: number;
    img?: SitemapImageOption[];
    video?: SitemapVideoOption[];
    links?: SitemapLinkOption[];
    news?: SitemapNewsOption[];
}
export declare const getSitemapInfos: (app: App, options: SitemapPluginOptions) => [path: string, info: SitemapInfo][];
