import type { App } from 'vuepress/core';
import type { ExtendPage } from '../../typings/index.js';
import type { SeoPluginOptions } from '../options.js';
export declare const getCanonicalLink: (page: ExtendPage, canonical: SeoPluginOptions["canonical"]) => string | null;
export declare const getAlternateLinks: (app: App, page: ExtendPage, hostname: string) => {
    lang: string;
    path: string;
}[];
