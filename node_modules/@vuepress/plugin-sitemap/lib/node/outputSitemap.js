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
    if (fs.existsSync(robotTxtPath)) {
        const { succeed } = logger.load(`Appended sitemap path to ${colors.cyan('robots.txt')}`);
        const robotsTxt = await fs.readFile(robotTxtPath, 'utf-8');
        const newRobotsTxtContent = `${robotsTxt.replace(/^Sitemap: .*$/u, '')}\nSitemap: ${hostname}${base}${sitemapPath}\n`;
        await fs.writeFile(robotTxtPath, newRobotsTxtContent, {
            encoding: 'utf-8',
            flag: 'w',
        });
        succeed();
    }
};
