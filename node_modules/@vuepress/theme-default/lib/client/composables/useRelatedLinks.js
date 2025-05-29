import { resolveAutoLink } from '@theme/resolveAutoLink';
import { useData } from '@theme/useData';
import { useSidebarItems } from '@theme/useSidebarItems';
import { computed } from 'vue';
import { resolveRoute, useRoutePath } from 'vuepress/client';
import { isPlainObject, isString } from 'vuepress/shared';
const resolveFromFrontmatterConfig = (config, currentPath) => {
    if (config === false) {
        return false;
    }
    if (isString(config)) {
        return resolveAutoLink(config, currentPath);
    }
    if (isPlainObject(config)) {
        return {
            ...config,
            link: resolveAutoLink(config.link, currentPath).link,
        };
    }
    return null;
};
/**
 * Resolve `prev` or `next` config from sidebar items
 */
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
    const linkIndex = sidebarItems.findIndex((item) => item.link === currentPath);
    if (linkIndex !== -1) {
        const targetItem = sidebarItems[linkIndex + offset];
        if (!targetItem)
            return null;
        if (targetItem.link)
            return targetItem;
        if ('prefix' in targetItem && !resolveRoute(targetItem.prefix).notFound)
            return {
                ...targetItem,
                link: targetItem.prefix,
            };
        return null;
    }
    for (const item of sidebarItems) {
        if ('children' in item) {
            const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
            if (childResult) {
                return childResult;
            }
        }
    }
    const prefixIndex = sidebarItems.findIndex((item) => 'prefix' in item && item.prefix === currentPath);
    if (prefixIndex !== -1) {
        const targetItem = sidebarItems[prefixIndex + offset];
        if (!targetItem)
            return null;
        if (targetItem.link)
            return targetItem;
        if ('prefix' in targetItem && !resolveRoute(targetItem.prefix).notFound)
            return {
                ...targetItem,
                link: targetItem.prefix,
            };
        return null;
    }
    return null;
};
export const useRelatedLinks = () => {
    const { frontmatter, themeLocale } = useData();
    const sidebarItems = useSidebarItems();
    const routePath = useRoutePath();
    const prevLink = computed(() => {
        const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev, routePath.value);
        return prevConfig === false
            ? null
            : (prevConfig ??
                (themeLocale.value.prev === false
                    ? null
                    : resolveFromSidebarItems(sidebarItems.value, routePath.value, -1)));
    });
    const nextLink = computed(() => {
        const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next, routePath.value);
        return nextConfig === false
            ? null
            : (nextConfig ??
                (themeLocale.value.next === false
                    ? null
                    : resolveFromSidebarItems(sidebarItems.value, routePath.value, 1)));
    });
    return {
        prevLink,
        nextLink,
    };
};
