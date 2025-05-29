import { resolveAutoLink } from '@theme/resolveAutoLink';
import { resolvePrefix } from '@theme/resolvePrefix';
import { useData } from '@theme/useData';
import { isLinkRelative } from '@vuepress/helper/client';
import { computed } from 'vue';
import { isString } from 'vuepress/shared';
const resolveNavbarItem = (item, prefix = '') => {
    if (isString(item)) {
        return resolveAutoLink(resolvePrefix(prefix, item));
    }
    if ('children' in item) {
        return {
            ...item,
            children: item.children.map((child) => resolveNavbarItem(child, resolvePrefix(prefix, item.prefix))),
        };
    }
    return {
        ...item,
        link: isLinkRelative(item.link)
            ? resolveAutoLink(resolvePrefix(prefix, item.link)).link
            : item.link,
    };
};
export const useNavbarConfig = () => {
    const { themeLocale } = useData();
    return computed(() => 
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    (themeLocale.value.navbar || []).map((item) => resolveNavbarItem(item)));
};
