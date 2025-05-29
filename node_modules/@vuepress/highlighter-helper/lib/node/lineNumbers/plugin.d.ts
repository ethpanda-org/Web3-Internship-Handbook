import type { Markdown } from 'vuepress/markdown';
import type { MarkdownItLineNumbersOptions } from './options.js';
export declare const lineNumbers: (md: Markdown, { lineNumbers: lineNumberOptions, removeLastLine, resolveLineNumbers: customResolveLineNumbers, }?: MarkdownItLineNumbersOptions) => void;
