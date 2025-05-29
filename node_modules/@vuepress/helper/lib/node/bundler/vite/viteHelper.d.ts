import type { App } from 'vuepress/core';
/**
 * Add Vite config
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 * @param config Vite config
 */
export declare const addViteConfig: (bundlerOptions: unknown, app: App, config: Record<string, unknown>) => void;
/**
 * Add modules to Vite `optimizeDeps.include` list
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 */
export declare const addViteOptimizeDepsInclude: (bundlerOptions: unknown, app: App, module: string[] | string, isDeep?: boolean) => void;
/**
 * Add modules to Vite `optimizeDeps.exclude` list
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 */
export declare const addViteOptimizeDepsExclude: (bundlerOptions: unknown, app: App, module: string[] | string) => void;
/**
 * Add modules to Vite `optimizeDeps.needsInterop` list
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 */
export declare const addViteOptimizeDepsNeedsInterop: (bundlerOptions: unknown, app: App, module: string[] | string) => void;
/**
 * Add modules to Vite `ssr.external` list
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 */
export declare const addViteSsrExternal: (bundlerOptions: unknown, app: App, module: string[] | string) => void;
/**
 * Add modules to Vite `ssr.noExternal` list
 */
export declare const addViteSsrNoExternal: (bundlerOptions: unknown, app: App, module: string[] | string) => void;
