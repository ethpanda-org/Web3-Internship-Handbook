import { BundlerOptions, Bundler } from '@vuepress/core';
import { Options } from '@vitejs/plugin-vue';
import { InlineConfig } from 'vite';

/**
 * Options for bundler-vite
 */
interface ViteBundlerOptions extends BundlerOptions {
    viteOptions?: InlineConfig;
    vuePluginOptions?: Options;
}

declare const viteBundler: (options?: ViteBundlerOptions) => Bundler;

export { type ViteBundlerOptions, viteBundler as default, viteBundler };
