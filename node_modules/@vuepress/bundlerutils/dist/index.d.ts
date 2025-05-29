import { App } from 'vue';
import { Router } from 'vue-router';
import { App as App$1, Page } from '@vuepress/core';
import { VuepressSSRContext } from '@vuepress/shared';
import { SSRContext } from 'vue/server-renderer';

/**
 * Create vue app and router for server side rendering
 */
declare const createVueServerApp: (serverAppPath: string) => Promise<{
    vueApp: App;
    vueRouter: Router;
}>;

/**
 * Util to read the ssr template file
 */
declare const getSsrTemplate: (app: App$1) => Promise<string>;

type PageSSRContext = SSRContext & VuepressSSRContext;
/**
 * Render a vuepress page to string
 */
declare const renderPageToString: <T extends PageSSRContext = PageSSRContext>({ page, vueApp, vueRouter, ssrContextInit, }: {
    page: Page;
    vueApp: App;
    vueRouter: Router;
    ssrContextInit?: Partial<T>;
}) => Promise<{
    ssrContext: T;
    ssrString: string;
}>;

export { type PageSSRContext, createVueServerApp, getSsrTemplate, renderPageToString };
