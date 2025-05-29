import type { App, Page } from 'vuepress/core';
export interface AlternatePath {
    path: string;
    lang: string;
}
export declare const getAlternatePaths: ({ lang, path, pathLocale }: Page, { pages, siteData }: App) => AlternatePath[];
