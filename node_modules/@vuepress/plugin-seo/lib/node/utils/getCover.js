import { isLinkAbsolute, isLinkWithProtocol } from '@vuepress/helper';
import { getUrl } from './getUrl.js';
export const getCover = ({ frontmatter }, { options: { base } }, hostname) => {
    const { banner, cover } = frontmatter;
    if (banner) {
        if (isLinkAbsolute(banner))
            return getUrl(hostname, base, banner);
        if (isLinkWithProtocol(banner))
            return banner;
    }
    if (cover) {
        if (isLinkAbsolute(cover))
            return getUrl(hostname, base, cover);
        if (isLinkWithProtocol(cover))
            return cover;
    }
    return null;
};
