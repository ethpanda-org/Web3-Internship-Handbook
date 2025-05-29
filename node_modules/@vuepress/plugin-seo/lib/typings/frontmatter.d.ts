import type { PageFrontmatter } from 'vuepress/core';
export type AuthorName = string;
export interface AuthorInfo {
    /**
     * Author name
     *
     * 作者姓名
     */
    name: string;
    /**
     * Author website
     *
     * 作者网站
     */
    url?: string;
    /**
     * Author email
     *
     * 作者 Email
     */
    email?: string;
}
export type SeoAuthor = AuthorInfo | AuthorInfo[] | AuthorName | AuthorName[];
export interface SEOPluginFrontmatter extends PageFrontmatter {
    /**
     * Whether inject seo information for current page
     *
     * @default true
     */
    seo?: boolean;
    /**
     * Feed author
     */
    author?: SeoAuthor;
    /**
     * Page Cover
     *
     * 页面封面
     */
    cover?: string;
    /**
     * Page Banner
     *
     * 页面 Banner 图
     */
    banner?: string;
}
