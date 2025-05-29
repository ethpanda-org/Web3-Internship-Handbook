import { isFunction, isString } from '@vuepress/helper';
import { removeEndingSlash } from 'vuepress/shared';
import { getAlternatePaths } from './getAlternatePaths.js';
import { getUrl } from './getUrl.js';
export const getCanonicalLink = (page, canonical) => isFunction(canonical)
    ? canonical(page)
    : isString(canonical)
        ? `${removeEndingSlash(canonical)}${page.path}`
        : null;
export const getAlternateLinks = (app, page, hostname) => getAlternatePaths(page, app).map(({ lang, path }) => ({
    lang,
    path: getUrl(hostname, app.siteData.base, path),
}));
