import { colors, fs } from 'vuepress/utils';
import { getSiteMap } from './getSitemap.js';
import { getSiteMapTemplate } from './getSitemapTemplate.js';
import { logger } from './logger.js';
export const outputSitemap = async (app, options, hostname) => {
    const { dir, options: { base }, } = app;
    const [sitemapPath, sitemapContent] = await getSiteMap(app, options, hostname);
    const [templatePath, templateContent] = getSiteMapTemplate(options);
    fs.writeFileSync(app.dir.dest(sitemapPath), sitemapContent);
    fs.writeFileSync(app.dir.dest(templatePath), templateContent);
    logger.succeed(`Generating sitemap to ${colors.cyan(sitemapPath)}`);
    const robotTxtPath = dir.dest('robots.txt');
    const sitemapDeclaration = `Sitemap: ${hostname}${base}${sitemapPath}\n`;
    const { succeed } = logger.load(`Appending sitemap path to ${colors.cyan('robots.txt')}`);
    if (fs.existsSync(robotTxtPath)) {
        const robotsTxt = await fs.readFile(robotTxtPath, 'utf-8');
        const siteMapRegex = /^Sitemap: .*$/mu;
        if (siteMapRegex.test(robotsTxt)) {
            await fs.writeFile(robotTxtPath, robotsTxt.replace(siteMapRegex, sitemapDeclaration), { encoding: 'utf-8', flag: 'w' });
        }
        else {
            await fs.writeFile(robotTxtPath, `\n${sitemapDeclaration}`, {
                encoding: 'utf-8',
                flag: 'a',
            });
        }
    }
    else {
        await fs.writeFile(robotTxtPath, sitemapDeclaration, {
            encoding: 'utf-8',
            flag: 'w',
        });
    }
    succeed();
};
