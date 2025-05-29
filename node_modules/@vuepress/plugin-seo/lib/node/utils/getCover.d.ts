import type { App } from 'vuepress/core';
import type { ExtendPage } from '../../typings/index.js';
export declare const getCover: ({ frontmatter }: ExtendPage, { options: { base } }: App, hostname: string) => string | null;
