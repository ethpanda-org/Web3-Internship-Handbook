import type { Plugin } from 'vuepress';
import type { LinksCheckPluginOptions } from './options.js';
export declare const linksCheckPlugin: ({ dev, build, exclude: ignore, }: LinksCheckPluginOptions) => Plugin;
