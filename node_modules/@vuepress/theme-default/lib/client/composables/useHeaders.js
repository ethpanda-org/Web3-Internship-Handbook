import { useData } from '@theme/useData';
import { getHeaders } from '@vuepress/helper/client';
import { injectLocal, provideLocal } from '@vueuse/core';
import { computed, ref } from 'vue';
import { onContentUpdated } from 'vuepress/client';
export const headersSymbol = Symbol('headers');
/**
 * Inject headers
 */
export const useHeaders = () => {
    const headers = injectLocal(headersSymbol);
    if (!headers) {
        throw new Error('useHeaders() is called without provider.');
    }
    return headers;
};
export const setupHeaders = () => {
    const { frontmatter, themeLocale } = useData();
    const headersRef = ref([]);
    const levels = computed(() => frontmatter.value.sidebarDepth ?? themeLocale.value.sidebarDepth ?? 2);
    const updateHeaders = () => {
        if (levels.value <= 0) {
            headersRef.value = [];
            return;
        }
        headersRef.value = getHeaders({
            levels: [2, levels.value + 1],
            ignore: ['.vp-badge'],
        });
    };
    provideLocal(headersSymbol, headersRef);
    onContentUpdated((reason) => {
        if (reason === 'beforeUnmount')
            headersRef.value = [];
        else
            updateHeaders();
    });
};
