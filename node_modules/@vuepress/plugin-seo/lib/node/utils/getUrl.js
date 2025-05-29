import { isLinkHttp, removeEndingSlash, removeLeadingSlash, } from 'vuepress/shared';
export const getUrl = (hostname, base, url) => `${removeEndingSlash(isLinkHttp(hostname) ? hostname : `https://${hostname}`)}${base}${removeLeadingSlash(url)}`;
