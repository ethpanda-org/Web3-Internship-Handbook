import type { GitData } from '@vuepress/plugin-git';
import type { Page } from 'vuepress/core';
import type { SEOPluginFrontmatter } from './frontmatter.js';
export interface SeoPluginPageData extends Record<string, unknown> {
    autoDesc?: true;
    excerpt?: string;
    git?: GitData;
}
export type ExtendPage<ExtraPageData extends Record<string, unknown> = Record<string, unknown>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>, ExtraPageFields extends Record<string, unknown> = Record<string, unknown>> = Page<ExtraPageData & SeoPluginPageData, ExtraPageFrontmatter & SEOPluginFrontmatter, ExtraPageFields>;
