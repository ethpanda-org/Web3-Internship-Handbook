import type { App } from 'vuepress/core';
import type { ExtendPage, SeoContent } from '../typings/index.js';
import type { SeoPluginOptions } from './options.js';
export declare const getOGPInfo: (page: ExtendPage, app: App, { isArticle, author: globalAuthor, hostname, fallBackImage, restrictions, twitterID, }: {
    isArticle: Exclude<SeoPluginOptions["isArticle"], undefined>;
    author?: SeoPluginOptions["author"];
    hostname: SeoPluginOptions["hostname"];
    fallBackImage: Exclude<SeoPluginOptions["fallBackImage"], undefined>;
    restrictions?: SeoPluginOptions["restrictions"];
    twitterID?: SeoPluginOptions["twitterID"];
}) => SeoContent;
