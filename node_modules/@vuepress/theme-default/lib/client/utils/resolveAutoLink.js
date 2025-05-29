import { resolveRoute } from 'vuepress/client';
/**
 * Resolve AutoLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
export const resolveAutoLink = (config, currentPath) => {
    const { notFound, meta, path } = resolveRoute(config, currentPath);
    return notFound
        ? { text: path, link: path }
        : {
            text: meta.title || path,
            link: path,
        };
};
