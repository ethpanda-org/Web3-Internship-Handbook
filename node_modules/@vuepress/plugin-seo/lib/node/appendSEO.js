import { addOGP, appendAlternate, appendCanonical, appendJSONLD, } from './appendHead.js';
import { getJSONLDInfo } from './getJSONLDInfo.js';
import { getOGPInfo } from './getOGPInfo.js';
import { getAlternateLinks, getCanonicalLink, logger } from './utils/index.js';
export const appendSEO = (app, { author, canonical, fallBackImage = '', hostname, isArticle = (articlePage) => Boolean(articlePage.filePathRelative && !articlePage.frontmatter.home), customHead, ogp, jsonLd, ...rest }) => {
    app.pages.forEach((page) => {
        const head = page.frontmatter.head ?? [];
        const canonicalLink = getCanonicalLink(page, canonical);
        const alternateLinks = getAlternateLinks(app, page, hostname);
        appendAlternate(head, alternateLinks);
        appendCanonical(head, canonicalLink);
        if (page.frontmatter.seo ?? true) {
            const defaultOGP = getOGPInfo(page, app, {
                isArticle,
                fallBackImage,
                hostname,
                ...rest,
            });
            const defaultJSONLD = getJSONLDInfo(page, app, {
                isArticle,
                hostname,
                author,
                fallBackImage,
            });
            const ogpContent = ogp ? ogp(defaultOGP, page, app) : defaultOGP;
            const jsonLDContent = jsonLd
                ? jsonLd(defaultJSONLD, page, app)
                : defaultJSONLD;
            if (app.env.isDebug) {
                logger.info(`OGP of ${page.path}:`, ogpContent);
                logger.info(`JSON-LD of ${page.path}:`, ogpContent);
            }
            addOGP(head, ogpContent);
            appendJSONLD(head, jsonLDContent);
            if (customHead)
                customHead(head, page, app);
        }
        page.frontmatter.head = head;
    });
};
