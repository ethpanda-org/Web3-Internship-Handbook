import type { App } from 'vuepress/core';
/**
 * Add tags as customElement
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 * @param customElements tags recognized as custom element
 */
export declare const addCustomElement: (bundlerOptions: unknown, app: App, customElement: RegExp | string[] | string) => void;
