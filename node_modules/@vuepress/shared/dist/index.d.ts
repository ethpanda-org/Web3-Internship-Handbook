import { MarkdownItHeader } from '@mdit-vue/types';

/**
 * Config for `<head>` tags
 */
type HeadConfig = [HeadTagEmpty, HeadAttrsConfig] | [HeadTagNonEmpty, HeadAttrsConfig, string];
/**
 * Allowed tags in `<head>`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head
 */
type HeadTag = HeadTagEmpty | HeadTagNonEmpty;
/**
 * Non-empty tags in `<head>`
 */
type HeadTagNonEmpty = 'noscript' | 'script' | 'style' | 'template' | 'title';
/**
 * Empty tags in `<head>`
 */
type HeadTagEmpty = 'base' | 'link' | 'meta' | 'script';
/**
 * Attributes to be set for tags in `<head>`
 */
type HeadAttrsConfig = Record<string, boolean | string>;

/**
 * Locales config, a key-value object
 *
 * - Key is the locale path (prefix)
 * - Value is the locales data
 *
 * @remark suffix `Config` means this is for user config
 */
type LocaleConfig<T extends LocaleData = LocaleData> = Record<string, Partial<T>>;
/**
 * Locales data
 */
type LocaleData = Record<never, never>;

/**
 * Base type of vuepress page
 */
interface PageBase<ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>> {
    /**
     * Route path of the page
     *
     * Firstly inferred from the file path
     *
     * Might be overridden by permalink
     *
     * @example '/guide/index.html'
     * @example '/2020/02/02/hello-world.html'
     */
    path: string;
    /**
     * Title of the page
     */
    title: string;
    /**
     * Language of the page
     */
    lang: string;
    /**
     * Front matter of the page
     */
    frontmatter: PageFrontmatter<ExtraPageFrontmatter>;
}
/**
 * Vuepress page data
 */
type PageData<ExtraPageData extends Record<string, unknown> = Record<string, unknown>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>> = ExtraPageData & PageBase<ExtraPageFrontmatter>;
/**
 * Vuepress page frontmatter
 *
 * Notice that frontmatter is parsed from yaml or other languages,
 * so we cannot guarantee the type safety
 */
type PageFrontmatter<T extends Record<string, unknown> = Record<string, unknown>> = Partial<T> & {
    date?: Date | string;
    description?: string;
    head?: HeadConfig[];
    lang?: string;
    layout?: string;
    permalink?: string | null;
    permalinkPattern?: string | null;
    routeMeta?: Record<string, unknown>;
    title?: string;
};
/**
 * Vuepress page header
 */
type PageHeader = MarkdownItHeader;

/**
 * Vuepress site data
 */
interface SiteData extends SiteLocaleData {
    /**
     * The base URL the site will be deployed at
     *
     * It should always start and end with a slash
     *
     * @default '/'
     */
    base: '/' | `/${string}/`;
    /**
     * Specify locales for i18n support
     *
     * It will override the root-level site data in different subpath
     *
     * @example
     * {
     *   '/en/': {
     *     lang: 'en-US',
     *     title: 'Hello',
     *     description: 'This will take effect under /en/ subpath',
     *   },
     *   '/zh/': {
     *     lang: 'zh-CN',
     *     title: '你好',
     *     description: '它将会在 /zh/ 子路径下生效',
     *   }
     * }
     */
    locales: SiteLocaleConfig;
}
/**
 * Locales data of vuepress site
 *
 * If they are set in the root of site data, they will be used
 * as the default value
 *
 * If they are set in the `locales` of site data, they will be
 * used for specific locale
 */
interface SiteLocaleData {
    /**
     * Language for the site
     *
     * @default 'en-US'
     */
    lang: string;
    /**
     * Title for the site
     *
     * @default ''
     */
    title: string;
    /**
     * Description for the site
     *
     * @default ''
     */
    description: string;
    /**
     * Head config
     *
     * Describe the tags to be appended into the `<head>` tag
     *
     * @default []
     *
     * @example ['link', { rel: 'icon', href: '/logo.png' }]
     * @example ['style', { type: 'text/css' }, 'p { color: red; }']
     */
    head: HeadConfig[];
}
/**
 * Site locale config
 */
type SiteLocaleConfig = LocaleConfig<SiteLocaleData>;

/**
 * Context for SSR
 */
interface VuepressSSRContext {
    lang: string;
    head: HeadConfig[];
}

/**
 * Determine a link is external or not
 */
declare const isLinkExternal: (link: string, base?: string) => boolean;

/**
 * Determine a link is http link or not
 *
 * - http://github.com
 * - https://github.com
 * - //github.com
 */
declare const isLinkHttp: (link: string) => boolean;

/**
 * Determine a link has protocol or not
 */
declare const isLinkWithProtocol: (link: string) => boolean;

/**
 * Infer route path of the given raw path
 */
declare const inferRoutePath: (rawPath: string) => string;

/**
 * Normalize the given pathname path to the final route path
 */
declare const normalizeRoutePath: (pathname: string, current?: string) => string;

/**
 * Resolve the matched locale path of route path
 */
declare const resolveLocalePath: (locales: LocaleConfig, routePath: string) => string;

/**
 * For a give URL, remove the origin and the site base to get the route path
 */
declare const resolveRoutePathFromUrl: (url: string, base?: string) => string;

/**
 * Split a path into pathname and hashAndQueries
 */
declare const splitPath: (path: string) => {
    pathname: string;
    hashAndQueries: string;
};

/**
 * Dedupe head config with identifier
 *
 * Items that appear earlier have higher priority
 */
declare const dedupeHead: (head: HeadConfig[]) => HeadConfig[];

/**
 * Ensure a url string to have leading slash /
 */
declare const ensureLeadingSlash: (str: string) => string;

/**
 * Ensure a url string to have ending slash /
 */
declare const ensureEndingSlash: (str: string) => string;

/**
 * Format a date string to `yyyy-MM-dd`
 */
declare const formatDateString: (str: string, defaultDateString?: string) => string;

/**
 * Omit properties from an object
 */
declare const omit: <T extends Record<string, unknown>, U extends string[]>(obj: T, ...keys: U) => Omit<T, U[number]>;

/**
 * Remove ending slash / from a string
 */
declare const removeEndingSlash: (str: string) => string;

/**
 * Remove leading slash / from a string
 */
declare const removeLeadingSlash: (str: string) => string;

/**
 * Resolve identifier of a tag, to avoid duplicated tags in `<head>`
 */
declare const resolveHeadIdentifier: ([tag, attrs, content]: HeadConfig) => string | null;

/**
 * Check if a value is a function
 */
declare const isFunction: (val: unknown) => val is Function;
/**
 * Check if a value is plain object, with generic type support
 */
declare const isPlainObject: <T extends Record<any, any> = Record<any, any>>(val: unknown) => val is T;
/**
 * Check if a value is a string
 */
declare const isString: (val: unknown) => val is string;

export { type HeadAttrsConfig, type HeadConfig, type HeadTag, type HeadTagEmpty, type HeadTagNonEmpty, type LocaleConfig, type LocaleData, type PageBase, type PageData, type PageFrontmatter, type PageHeader, type SiteData, type SiteLocaleConfig, type SiteLocaleData, type VuepressSSRContext, dedupeHead, ensureEndingSlash, ensureLeadingSlash, formatDateString, inferRoutePath, isFunction, isLinkExternal, isLinkHttp, isLinkWithProtocol, isPlainObject, isString, normalizeRoutePath, omit, removeEndingSlash, removeLeadingSlash, resolveHeadIdentifier, resolveLocalePath, resolveRoutePathFromUrl, splitPath };
