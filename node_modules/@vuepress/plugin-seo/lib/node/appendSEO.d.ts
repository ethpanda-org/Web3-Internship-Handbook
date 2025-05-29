import type { App } from 'vuepress/core';
import type { SeoPluginOptions } from './options.js';
export declare const appendSEO: (app: App, { author, canonical, fallBackImage, hostname, isArticle, customHead, ogp, jsonLd, ...rest }: SeoPluginOptions) => void;
