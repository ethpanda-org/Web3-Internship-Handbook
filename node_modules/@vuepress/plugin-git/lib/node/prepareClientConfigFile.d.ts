import type { App } from 'vuepress';
import type { GitPluginOptions } from './options.js';
export declare const prepareClientConfigFile: (app: App, { changelog, contributors }: GitPluginOptions) => Promise<string>;
