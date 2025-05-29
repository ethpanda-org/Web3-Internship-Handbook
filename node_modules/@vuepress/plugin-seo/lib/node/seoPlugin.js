import { colors } from 'vuepress/utils';
import { appendSEO } from './appendSEO.js';
import { generateDescription } from './generateDescription.js';
import { generateRobotsTxt } from './generateRobotsTxt.js';
import { PLUGIN_NAME, logger } from './utils/index.js';
export const seoPlugin = (options) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    const { autoDescription = true, hostname, ...rest } = options;
    const plugin = { name: PLUGIN_NAME };
    if (!hostname) {
        logger.error(`Option ${colors.magenta('hostname')} is required!`);
        return plugin;
    }
    return {
        ...plugin,
        extendsPage: (page) => {
            if (page.frontmatter.seo ?? true)
                generateDescription(app, page, autoDescription);
        },
        onInitialized: () => {
            appendSEO(app, { hostname, ...rest });
        },
        onGenerated: () => generateRobotsTxt(app),
    };
};
