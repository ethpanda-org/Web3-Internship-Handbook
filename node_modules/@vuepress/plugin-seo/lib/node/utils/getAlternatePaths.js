import { entries, isString } from '@vuepress/helper';
export const getAlternatePaths = ({ lang, path, pathLocale }, { pages, siteData }) => entries(siteData.locales)
    .map(([localePath, { lang: siteLang }]) => ({
    path: `${localePath}${path.replace(pathLocale, '')}`,
    lang: siteLang,
}))
    .filter((item) => isString(item.lang) &&
    item.lang !== lang &&
    pages.some(({ path: pagePath }) => pagePath === item.path));
