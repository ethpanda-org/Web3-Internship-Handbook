import { useData } from '@theme/useData';
import { useRoutePaths } from '@vuepress/helper/client';
import { computed } from 'vue';
import { useRoute } from 'vuepress/client';
/**
 * Get navbar config of select language dropdown
 */
export const useNavbarSelectLanguage = () => {
    const route = useRoute();
    const routePaths = useRoutePaths();
    const { routeLocale, site, siteLocale, theme, themeLocale } = useData();
    return computed(() => {
        const localePaths = Object.keys(site.value.locales);
        // do not display language selection dropdown if there is only one language
        if (localePaths.length < 2) {
            return [];
        }
        const currentPath = route.path;
        const currentFullPath = route.fullPath;
        const languageDropdown = {
            text: `${themeLocale.value.selectLanguageText}`,
            ariaLabel: `${themeLocale.value.selectLanguageAriaLabel ??
                themeLocale.value.selectLanguageText}`,
            children: localePaths.map((targetLocalePath) => {
                // target locale config of this language link
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                const targetSiteLocale = site.value.locales?.[targetLocalePath] ?? {};
                const targetThemeLocale = theme.value.locales?.[targetLocalePath] ?? {};
                const targetLang = `${targetSiteLocale.lang}`;
                const text = targetThemeLocale.selectLanguageName ?? targetLang;
                // if the target language is current language
                // stay at current link
                if (targetLang === siteLocale.value.lang) {
                    return {
                        text,
                        activeMatch: '.',
                        link: route.fullPath,
                    };
                }
                // if the target language is not current language
                // try to link to the corresponding page of current page
                // or fallback to homepage
                const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
                return {
                    text,
                    // try to keep current hash and params across languages
                    link: routePaths.value.some((item) => item === targetLocalePage)
                        ? currentFullPath.replace(currentPath, targetLocalePage)
                        : (targetThemeLocale.home ?? targetLocalePath),
                };
            }),
        };
        return [languageDropdown];
    });
};
