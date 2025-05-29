import type { AutoLinkOptions } from '../../shared/index.js';
/**
 * Resolve AutoLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
export declare const resolveAutoLink: (config: string, currentPath?: string) => AutoLinkOptions;
