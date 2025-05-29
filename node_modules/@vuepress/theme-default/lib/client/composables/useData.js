import { useThemeData, useThemeLocaleData, } from '@vuepress/plugin-theme-data/client';
import { useClientData } from 'vuepress/client';
export const useData = () => {
    const { pageData, pageFrontmatter, pageLang, siteData, siteLocaleData, ...rest } = useClientData();
    return {
        ...rest,
        page: pageData,
        frontmatter: pageFrontmatter,
        lang: pageLang,
        site: siteData,
        siteLocale: siteLocaleData,
        theme: useThemeData(),
        themeLocale: useThemeLocaleData(),
    };
};
