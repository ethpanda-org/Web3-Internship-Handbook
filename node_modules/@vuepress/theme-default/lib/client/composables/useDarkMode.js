import { useData } from '@theme/useData';
import { usePreferredDark, useStorage, watchImmediate } from '@vueuse/core';
import { computed, inject, onMounted, onUnmounted, provide } from 'vue';
export const darkModeSymbol = Symbol(__VUEPRESS_DEV__ ? 'darkMode' : '');
const applyDarkModeToHTML = (isDarkMode) => {
    const update = (value = isDarkMode.value) => {
        // set `class="dark"` on `<html>` element
        const el = window.document.documentElement;
        // set `data-theme="light|dark"` on `<html>` element
        el.dataset.theme = value ? 'dark' : 'light';
    };
    onMounted(() => {
        watchImmediate(isDarkMode, update);
    });
    onUnmounted(() => {
        update();
    });
};
/**
 * Inject dark mode global computed
 */
export const useDarkMode = () => {
    const isDarkMode = inject(darkModeSymbol);
    if (!isDarkMode) {
        throw new Error('useDarkMode() is called without provider.');
    }
    return isDarkMode;
};
/**
 * Create dark mode ref and provide as global computed in setup
 */
export const setupDarkMode = () => {
    const { themeLocale } = useData();
    const isDarkPreferred = usePreferredDark();
    const darkStorage = useStorage('vuepress-color-scheme', themeLocale.value.colorMode);
    const isDarkMode = computed({
        get() {
            // disable color mode switching
            if (!themeLocale.value.colorModeSwitch) {
                return themeLocale.value.colorMode === 'dark';
            }
            // auto detected from prefers-color-scheme
            if (darkStorage.value === 'auto') {
                return isDarkPreferred.value;
            }
            // storage value
            return darkStorage.value === 'dark';
        },
        set(val) {
            if (val === isDarkPreferred.value) {
                darkStorage.value = 'auto';
            }
            else {
                darkStorage.value = val ? 'dark' : 'light';
            }
        },
    });
    provide(darkModeSymbol, isDarkMode);
    applyDarkModeToHTML(isDarkMode);
};
