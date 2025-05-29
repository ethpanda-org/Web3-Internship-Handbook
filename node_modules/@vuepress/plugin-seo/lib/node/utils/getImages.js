import { isLinkAbsolute, isLinkWithProtocol } from '@vuepress/helper';
import { getUrl } from './getUrl.js';
const IMAGE_REG_EXP = /!\[.*?\]\((.*?)\)/gu;
export const getImages = ({ content }, { options: { base } }, hostname) => Array.from(content.matchAll(IMAGE_REG_EXP))
    .map(([, link]) => {
    if (isLinkAbsolute(link))
        return getUrl(hostname, base, link);
    if (isLinkWithProtocol(link))
        return link;
    return null;
})
    .filter((item) => item !== null);
