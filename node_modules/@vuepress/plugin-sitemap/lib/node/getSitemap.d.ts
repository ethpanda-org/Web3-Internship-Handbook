import type { App } from 'vuepress/core';
import type { SitemapPluginOptions } from '../typings/index.js';
export declare const getSiteMap: (app: App, options: SitemapPluginOptions, hostname: string) => Promise<[path: string, content: string]>;
