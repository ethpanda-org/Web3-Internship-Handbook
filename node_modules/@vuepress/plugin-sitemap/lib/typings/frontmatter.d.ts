import type { PageFrontmatter } from 'vuepress/core';
import type { SitemapChangeFrequency, SitemapImageOption, SitemapNewsOption, SitemapVideoOption } from './sitemap.js';
export interface SitemapFrontmatterOption {
    /**
     * Update Frequency
     *
     * 更新频率
     */
    changefreq?: SitemapChangeFrequency;
    /**
     * Priority of this page, supports 0.0 -1.0
     *
     * 页面优先级，0.0 - 1.0
     */
    priority?: number;
    /**
     * Image config
     *
     * 图片配置
     */
    img?: SitemapImageOption[];
    /**
     * Video config
     *
     * 视频配置
     */
    video?: SitemapVideoOption[];
    /**
     * News config
     *
     * 新闻配置
     */
    news?: SitemapNewsOption[];
}
export interface SitemapPluginFrontmatter extends PageFrontmatter {
    sitemap?: SitemapFrontmatterOption | false;
}
