import { SitemapStream, streamToPromise } from 'sitemap';
import { removeLeadingSlash } from 'vuepress/shared';
import { getSitemapInfos } from './getInfo.js';
export const getSiteMap = async (app, options, hostname) => {
    const { extraUrls = [], xmlNameSpace: xmlns } = options;
    const sitemapFilename = options.sitemapFilename
        ? removeLeadingSlash(options.sitemapFilename)
        : 'sitemap.xml';
    const sitemapXSLFilename = options.sitemapXSLFilename
        ? removeLeadingSlash(options.sitemapXSLFilename)
        : 'sitemap.xsl';
    const { options: { base }, } = app;
    const sitemapInfos = getSitemapInfos(app, options);
    const sitemapStream = new SitemapStream({
        hostname,
        ...(xmlns ? { xmlns } : {}),
    });
    sitemapInfos.forEach(([path, info]) => sitemapStream.write({
        url: `${base}${removeLeadingSlash(path)}`,
        ...info,
    }));
    extraUrls.forEach((item) => sitemapStream.write({ url: `${base}${removeLeadingSlash(item)}` }));
    sitemapStream.end();
    return streamToPromise(sitemapStream).then((data) => [
        sitemapFilename,
        data.toString().replace('<?xml version="1.0" encoding="UTF-8"?>', `\
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${base}${sitemapXSLFilename}"?>
`),
    ]);
};
