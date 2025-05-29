import { SfcPluginOptions } from '@mdit-vue/plugin-sfc';
export { MarkdownSfcBlocks, SfcPluginOptions, sfcPlugin } from '@mdit-vue/plugin-sfc';
import { MarkdownItEnv } from '@mdit-vue/types';
import { PageFrontmatter, PageHeader } from '@vuepress/shared';
import MarkdownIt, { PluginWithOptions, Options as Options$1 } from 'markdown-it';
import { FrontmatterPluginOptions } from '@mdit-vue/plugin-frontmatter';
export { FrontmatterPluginOptions, frontmatterPlugin } from '@mdit-vue/plugin-frontmatter';
import { HeadersPluginOptions } from '@mdit-vue/plugin-headers';
export { HeadersPluginOptions, headersPlugin } from '@mdit-vue/plugin-headers';
import { TocPluginOptions } from '@mdit-vue/plugin-toc';
export { TocPluginOptions, tocPlugin } from '@mdit-vue/plugin-toc';
import anchorPlugin from 'markdown-it-anchor';
export { default as anchorPlugin } from 'markdown-it-anchor';
import { Options } from 'markdown-it-emoji';
export { full as emojiPlugin } from 'markdown-it-emoji';
export { ComponentPluginOptions, componentPlugin } from '@mdit-vue/plugin-component';
export { titlePlugin } from '@mdit-vue/plugin-title';

type AnchorPluginOptions = anchorPlugin.AnchorOptions;

interface AssetsPluginOptions {
    /**
     * Whether to prepend base to absolute path
     */
    absolutePathPrependBase?: boolean;
    /**
     * Prefix to add to relative assets links
     */
    relativePathPrefix?: string;
}
/**
 * Plugin to handle assets links
 */
declare const assetsPlugin: PluginWithOptions<AssetsPluginOptions>;

type EmojiPluginOptions = Options;

interface ImportCodePluginOptions {
    /**
     * A function to handle the import path
     */
    handleImportPath?: (str: string) => string;
}
declare const importCodePlugin: PluginWithOptions<ImportCodePluginOptions>;

interface LinksPluginOptions {
    /**
     * Additional attributes for external links
     *
     * @default
     * ```js
     * ({
     *   target: '_blank',
     *   rel: 'noopener noreferrer',
     * })
     * ```
     */
    externalAttrs?: Record<string, string>;
    /**
     * Tag for internal links
     *
     * @default 'RouteLink'
     */
    internalTag?: 'a' | 'RouteLink' | 'RouterLink';
    /**
     * Method to check if a link is external
     *
     * @default import { isLinkExternal } from '@vuepress/shared'
     */
    isExternal?: (href: string, env: MarkdownEnv) => boolean;
}
/**
 * Process links in markdown file
 *
 * - internal links: convert `<a>` tag into internalTag
 * - external links: add extra attrs
 */
declare const linksPlugin: PluginWithOptions<LinksPluginOptions>;

interface VPrePluginOptions {
    /**
     * Add `v-pre` directive to `<pre>` tag of code block or not
     */
    block?: boolean;
    /**
     * Add `v-pre` directive to `<code>` tag of inline code or not
     */
    inline?: boolean;
}
/**
 * v-pre plugin
 */
declare const vPrePlugin: PluginWithOptions<VPrePluginOptions>;

type Markdown = MarkdownIt;

interface MarkdownOptions extends Options$1 {
    anchor?: AnchorPluginOptions | false;
    assets?: AssetsPluginOptions | false;
    component?: false;
    emoji?: EmojiPluginOptions | false;
    frontmatter?: FrontmatterPluginOptions | false;
    headers?: HeadersPluginOptions | false;
    title?: false;
    importCode?: ImportCodePluginOptions | false;
    links?: LinksPluginOptions | false;
    sfc?: SfcPluginOptions | false;
    slugify?: MarkdownSlugifyFunction;
    toc?: TocPluginOptions | false;
    vPre?: VPrePluginOptions | false;
    /**
     * @deprecated This feature has been removed. Please use `@vuepress/plugin-prismjs` or `@vuepress/plugin-shiki` instead.
     */
    code?: never;
}
/**
 * Headers in markdown file
 */
type MarkdownHeader = PageHeader;
/**
 * Internal links in markdown file
 *
 * Used for file existence check
 */
interface MarkdownLink {
    raw: string;
    relative: string;
    absolute: string | null;
}
/**
 * The `env` object to be passed to markdown-it render function
 *
 * Input some meta data for markdown file parsing and rendering
 *
 * Output some resources from the markdown file
 */
interface MarkdownEnv extends MarkdownItEnv {
    /**
     * Base / publicPath of current site
     */
    base?: string;
    /**
     * Absolute file path of the markdown file
     */
    filePath?: string | null;
    /**
     * Relative file path of the markdown file
     */
    filePathRelative?: string | null;
    /**
     * Frontmatter of the markdown file
     */
    frontmatter?: PageFrontmatter;
    /**
     * Imported file that extracted by importCodePlugin
     */
    importedFiles?: string[];
    /**
     * Links that extracted by linksPlugin
     */
    links?: MarkdownLink[];
}
/**
 * Type of `slugify` function
 */
type MarkdownSlugifyFunction = (str: string) => string;

/**
 * Create vuepress customized markdown-it instance
 */
declare const createMarkdown: ({ anchor, assets, code, vPre, component, emoji, frontmatter, headers, title, importCode, links, sfc, slugify, toc, ...markdownItOptions }?: MarkdownOptions) => Markdown;

export { type AnchorPluginOptions, type AssetsPluginOptions, type EmojiPluginOptions, type ImportCodePluginOptions, type LinksPluginOptions, type Markdown, type MarkdownEnv, type MarkdownHeader, type MarkdownLink, type MarkdownOptions, type MarkdownSlugifyFunction, type VPrePluginOptions, assetsPlugin, createMarkdown, importCodePlugin, linksPlugin, vPrePlugin };
