import type { MarkdownEnv } from 'vuepress/markdown';
export type ClearMarkdownEnv = MarkdownEnv & {
    references?: unknown;
};
export declare const cleanMarkdownEnv: (env: ClearMarkdownEnv) => ClearMarkdownEnv;
