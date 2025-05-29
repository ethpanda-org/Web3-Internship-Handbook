import type { HeadConfig } from 'vuepress/core';
import type { ArticleSchema, BlogPostingSchema, SeoContent, WebPageSchema } from '../typings/index.js';
export declare const addOGP: (head: HeadConfig[], content: SeoContent) => void;
export declare const appendJSONLD: (head: HeadConfig[], content: ArticleSchema | BlogPostingSchema | WebPageSchema) => void;
export declare const appendCanonical: (head: HeadConfig[], url?: string | null) => void;
export declare const appendAlternate: (head: HeadConfig[], urls: {
    lang: string;
    path: string;
}[]) => void;
