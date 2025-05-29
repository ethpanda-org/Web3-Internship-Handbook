import { isLinkAbsolute } from '@vuepress/helper';
import { logger } from 'vuepress/utils';
export const checkMarkdownLink = (page, { options, pages }, isIgnoreLink) => {
    const pagePath = page.filePathRelative ?? page.path;
    const markdownLinks = page.links.filter(({ raw }) => raw.match(/^.+.md((?:\?|#).*)?$/));
    const brokenLinks = [
        ...markdownLinks
            // Relative markdown links
            .filter(({ raw }) => !isLinkAbsolute(raw))
            .filter(({ relative }) => 
        // Check whether the page exists
        pages.every(({ filePathRelative }) => filePathRelative !== decodeURI(relative)) && !isIgnoreLink(relative)),
        ...markdownLinks
            // Absolute markdown links
            .filter(({ raw }) => isLinkAbsolute(raw))
            .filter(({ absolute }) => 
        // Check whether the page exists
        absolute &&
            pages.every(({ filePathRelative }) => !filePathRelative ||
                (`${options.base}${filePathRelative}` !== decodeURI(absolute) &&
                    !isIgnoreLink(absolute)))),
    ].map(({ raw }) => raw);
    if (brokenLinks.length) {
        logger.warn(`Broken links found in ${pagePath}: ${brokenLinks.join(', ')}`);
        return true;
    }
    return false;
};
