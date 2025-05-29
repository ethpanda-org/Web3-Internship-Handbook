import { ensureEndingSlash, isLinkAbsolute, isLinkWithProtocol, } from '@vuepress/helper/client';
export const resolvePrefix = (prefix = '', path = '') => isLinkAbsolute(path) || isLinkWithProtocol(path)
    ? path
    : `${ensureEndingSlash(prefix)}${path}`;
