import { getDate, isArray, isString } from '@vuepress/helper';
import { getAlternatePaths, getCover, getImages, getSEOAuthor, getUrl, } from './utils/index.js';
export const getOGPInfo = (page, app, { isArticle, author: globalAuthor, hostname, fallBackImage, restrictions, twitterID, }) => {
    const { base, title: siteTitle, locales } = app.siteData;
    const { frontmatter: { author: pageAuthor, time, date = time, tag, tags = tag, }, data: { git = {} }, } = page;
    const author = getSEOAuthor(pageAuthor || globalAuthor);
    const modifiedTime = git.updatedTime
        ? new Date(git.updatedTime).toISOString()
        : null;
    const articleTags = isArray(tags) ? tags : isString(tag) ? [tag] : [];
    const articleTitle = page.title;
    const cover = getCover(page, app, hostname);
    const images = getImages(page, app, hostname);
    const alternateLocalePaths = getAlternatePaths(page, app);
    const publishedTime = getDate(date)?.toISOString();
    const ogImage = cover || images[0] || fallBackImage;
    const defaultOGP = {
        'og:url': getUrl(hostname, base, page.path),
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        'og:site_name': locales[page.pathLocale]?.title || siteTitle,
        'og:title': articleTitle,
        'og:description': page.frontmatter.description || '',
        'og:type': isArticle(page) ? 'article' : 'website',
        'og:image': ogImage,
        'og:locale': page.lang,
        'og:locale:alternate': alternateLocalePaths.map(({ lang }) => lang),
        ...(modifiedTime ? { 'og:updated_time': modifiedTime } : {}),
        ...(restrictions ? { 'og:restrictions:age': restrictions } : {}),
        ...(twitterID ? { 'twitter:creator': twitterID } : {}),
        ...(cover
            ? {
                'twitter:card': 'summary_large_image',
                'twitter:image:src': cover,
                'twitter:image:alt': articleTitle,
            }
            : {}),
        'article:author': author[0]?.name,
        'article:tag': articleTags,
        ...(publishedTime ? { 'article:published_time': publishedTime } : {}),
        ...(modifiedTime ? { 'article:modified_time': modifiedTime } : {}),
    };
    return defaultOGP;
};
