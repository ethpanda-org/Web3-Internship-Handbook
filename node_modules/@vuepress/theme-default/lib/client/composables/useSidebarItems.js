import { resolveAutoLink } from '@theme/resolveAutoLink';
import { resolvePrefix } from '@theme/resolvePrefix';
import { useData } from '@theme/useData';
import { useHeaders } from '@theme/useHeaders';
import { isLinkRelative, keys, startsWith } from '@vuepress/helper/client';
import { computed, inject, provide } from 'vue';
import { useRoutePath } from 'vuepress/client';
import { isPlainObject, isString } from 'vuepress/shared';
/**
 * Util to transform page header to sidebar item
 */
export const resolveSidebarPageHeader = (header) => ({
    text: header.title,
    link: header.link,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    children: resolveSidebarPageHeaders(header.children),
});
export const resolveSidebarPageHeaders = (headers) => headers ? headers.map((header) => resolveSidebarPageHeader(header)) : [];
/**
 * Resolve current page and its header to sidebar items if the config is `heading`
 */
export const resolveSidebarHeadingItem = (page, headers) => [
    {
        text: page.title,
        children: resolveSidebarPageHeaders(headers),
    },
];
/**
 * Resolve sidebar items if the config is an array
 */
export const resolveArraySidebarItems = (sidebarConfig, headers, path, prefix = '') => {
    const handleChildItem = (item, pathPrefix) => {
        const childItem = isString(item)
            ? resolveAutoLink(resolvePrefix(pathPrefix, item))
            : isString(item.link)
                ? {
                    ...item,
                    link: isLinkRelative(item.link)
                        ? resolveAutoLink(resolvePrefix(pathPrefix, item.link)).link
                        : item.link,
                }
                : item;
        if ('children' in childItem) {
            return {
                ...childItem,
                children: childItem.children.map((child) => handleChildItem(child, resolvePrefix(pathPrefix, childItem.prefix))),
            };
        }
        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        if (childItem.link === path) {
            // skip h1 header
            const currentHeaders = headers[0]?.level === 1 ? headers[0].children : headers;
            return {
                ...childItem,
                children: resolveSidebarPageHeaders(currentHeaders),
            };
        }
        return childItem;
    };
    return sidebarConfig.map((item) => handleChildItem(item, prefix));
};
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
export const resolveMultiSidebarItems = (sidebarConfig, page, headers, path) => {
    const sidebarRoutes = keys(sidebarConfig).sort((x, y) => y.length - x.length);
    // Find matching config
    for (const base of sidebarRoutes)
        if (startsWith(decodeURI(path), base)) {
            const matched = sidebarConfig[base];
            return matched
                ? matched === 'heading'
                    ? resolveSidebarHeadingItem(page, headers)
                    : resolveArraySidebarItems(matched, headers, path, base)
                : [];
        }
    // eslint-disable-next-line no-console
    console.warn(`${decodeURI(path)} is missing sidebar config.`);
    return [];
};
export const sidebarItemsSymbol = Symbol('sidebarItems');
/**
 * Inject sidebar items global computed
 */
export const useSidebarItems = () => {
    const sidebarItems = inject(sidebarItemsSymbol);
    if (!sidebarItems) {
        throw new Error('useSidebarItems() is called without provider.');
    }
    return sidebarItems;
};
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
export const resolveSidebarItems = (sidebarConfig, page, path, routeLocale, headers) => {
    // resolve sidebar items according to the config
    if (sidebarConfig === false) {
        return [];
    }
    if (sidebarConfig === 'heading') {
        return resolveSidebarHeadingItem(page, headers);
    }
    if (Array.isArray(sidebarConfig)) {
        return resolveArraySidebarItems(sidebarConfig, headers, path, routeLocale);
    }
    if (isPlainObject(sidebarConfig)) {
        return resolveMultiSidebarItems(sidebarConfig, page, headers, path);
    }
    return [];
};
/**
 * Create sidebar items ref and provide as global computed in setup
 */
export const setupSidebarItems = () => {
    const { frontmatter, page, routeLocale, themeLocale } = useData();
    const headers = useHeaders();
    const routePath = useRoutePath();
    const sidebarConfig = computed(() => frontmatter.value.home
        ? false
        : (frontmatter.value.sidebar ??
            themeLocale.value.sidebar ??
            'heading'));
    const sidebarItems = computed(() => resolveSidebarItems(sidebarConfig.value, page.value, routePath.value, routeLocale.value, headers.value));
    provide(sidebarItemsSymbol, sidebarItems);
};
