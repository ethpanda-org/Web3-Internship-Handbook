import type { App } from 'vuepress/core';
import type { ArticleSchema, BlogPostingSchema, ExtendPage, WebPageSchema } from '../typings/index.js';
import type { SeoPluginOptions } from './options.js';
export declare const getJSONLDInfo: (page: ExtendPage, app: App, { isArticle, author: globalAuthor, fallBackImage, hostname, }: {
    isArticle: Exclude<SeoPluginOptions["isArticle"], undefined>;
    author?: SeoPluginOptions["author"];
    hostname: SeoPluginOptions["hostname"];
    fallBackImage: Exclude<SeoPluginOptions["fallBackImage"], undefined>;
}) => ArticleSchema | BlogPostingSchema | WebPageSchema;
