import { MarkdownLink, MarkdownSfcBlocks, MarkdownOptions, Markdown } from '@vuepress/markdown';
import { PageFrontmatter, PageBase, PageData, PageHeader, SiteData } from '@vuepress/shared';
export { HeadAttrsConfig, HeadConfig, HeadTag, HeadTagEmpty, HeadTagNonEmpty, LocaleConfig, LocaleData, PageData, PageFrontmatter, PageHeader, SiteData, SiteLocaleConfig } from '@vuepress/shared';
import { TemplateRenderer } from '@vuepress/utils';

/**
 * Vuepress bundler
 *
 * It provides abilities to:
 * - dev: run dev server for development
 * - build: bundle assets for deployment
 */
interface Bundler {
    /**
     * Name of the bundler
     */
    name: string;
    /**
     * Method to run vuepress app in dev mode, starting dev server
     */
    dev: (app: App) => Promise<() => Promise<void>>;
    /**
     * Method to run vuepress app in build mode, generating static pages and assets
     */
    build: (app: App) => Promise<void>;
}
type BundlerOptions = Record<string, unknown>;

/**
 * Vuepress Page
 */
type Page<ExtraPageData extends Record<string, unknown> = Record<string, unknown>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>, ExtraPageFields extends Record<string, unknown> = Record<string, unknown>> = ExtraPageFields & PageBase<ExtraPageFrontmatter> & {
    /**
     * Data of the page, which will be available in client code
     */
    data: PageData<ExtraPageData, ExtraPageFrontmatter>;
    /**
     * Raw Content of the page
     */
    content: string;
    /**
     * Rendered content of the page
     */
    contentRendered: string;
    /**
     * Date of the page, in 'yyyy-MM-dd' format
     *
     * @example '2020-09-09'
     */
    date: string;
    /**
     * Dependencies of the page
     */
    deps: string[];
    /**
     * Headers of the page
     */
    headers: PageHeader[];
    /**
     * Links of the page
     */
    links: MarkdownLink[];
    /**
     * Markdown env object of the page
     */
    markdownEnv: Record<string, unknown>;
    /**
     * Path of the page that inferred from file path
     *
     * If the page does not come from a file, it would be `null`
     *
     * @example '/guide/index.html'
     */
    pathInferred: string | null;
    /**
     * Locale path prefix of the page
     *
     * @example '/getting-started.html' -> '/'
     * @example '/en/getting-started.html' -> '/en/'
     * @example '/zh/getting-started.html' -> '/zh/'
     */
    pathLocale: string;
    /**
     * Permalink of the page
     *
     * If the page does not have a permalink, it would be `null`
     */
    permalink: string | null;
    /**
     * Custom data to be attached to route record
     */
    routeMeta: Record<string, unknown>;
    /**
     * Extracted sfc blocks of the page
     */
    sfcBlocks: MarkdownSfcBlocks;
    /**
     * Slug of the page
     */
    slug: string;
    /**
     * Source file path
     *
     * If the page does not come from a file, it would be `null`
     */
    filePath: string | null;
    /**
     * Source file path relative to source directory
     *
     * If the page does not come from a file, it would be `null`
     */
    filePathRelative: string | null;
    /**
     * Component file path
     */
    componentFilePath: string;
    /**
     * Component file path relative to temp directory
     */
    componentFilePathRelative: string;
    /**
     * Chunk file path
     */
    chunkFilePath: string;
    /**
     * Chunk file path relative to temp directory
     */
    chunkFilePathRelative: string;
    /**
     * Chunk name
     *
     * This will only take effect in webpack
     */
    chunkName: string;
    /**
     * Rendered html file path
     */
    htmlFilePath: string;
    /**
     * Rendered html file path relative to dest directory
     */
    htmlFilePathRelative: string;
};
/**
 * Options to create vuepress page
 */
interface PageOptions {
    /**
     * The raw markdown content of the page.
     *
     * If `content` is not provided, the file content of the `filePath`
     * will be used.
     */
    content?: string;
    /**
     * Absolute file path of the markdown source file.
     */
    filePath?: string;
    /**
     * Default frontmatter of the page, which could be overridden by
     * the frontmatter of the markdown content.
     */
    frontmatter?: PageFrontmatter;
    /**
     * If this option is set, it will be used as the final route path
     * of the page, ignoring the relative path and permalink.
     */
    path?: string;
}

type PromiseOrNot<T> = Promise<T> | T;
interface Closable {
    close(): void;
}
interface Hook<Exposed, Normalized = Exposed, Result = Normalized extends (...args: any) => infer U ? U extends Promise<infer V> ? V : U : never> {
    exposed: Exposed;
    normalized: Normalized;
    result: Result;
}
type LifeCycleHook<T extends unknown[] = []> = Hook<(app: App, ...args: T) => PromiseOrNot<void>>;
type ExtendsHook<T> = Hook<(extendable: T, app: App) => PromiseOrNot<void>>;
type ClientConfigFileHook = Hook<string | ((app: App) => PromiseOrNot<string>), (app: App) => Promise<string>>;
type AliasHook = Hook<Record<string, string> | ((app: App, isServer: boolean) => PromiseOrNot<Record<string, string>>), (app: App, isServer: boolean) => Promise<Record<string, string>>>;
type DefineHook = Hook<Record<string, unknown> | ((app: App, isServer: boolean) => PromiseOrNot<Record<string, unknown>>), (app: App, isServer: boolean) => Promise<Record<string, unknown>>>;
/**
 * List of hooks
 */
interface Hooks {
    onInitialized: LifeCycleHook;
    onPrepared: LifeCycleHook;
    onWatched: LifeCycleHook<[watchers: Closable[], restart: () => Promise<void>]>;
    onGenerated: LifeCycleHook;
    extendsMarkdownOptions: ExtendsHook<MarkdownOptions>;
    extendsMarkdown: ExtendsHook<Markdown>;
    extendsPageOptions: ExtendsHook<PageOptions>;
    extendsPage: ExtendsHook<Page>;
    extendsBundlerOptions: ExtendsHook<BundlerOptions>;
    clientConfigFile: ClientConfigFileHook;
    alias: AliasHook;
    define: DefineHook;
}
/**
 * Name of hooks
 */
type HooksName = keyof Hooks;
/**
 * Exposed hooks API that can be accessed by a plugin
 */
type HooksExposed = {
    [K in HooksName]: Hooks[K]['exposed'];
};
/**
 * Normalized hooks
 */
type HooksNormalized = {
    [K in HooksName]: Hooks[K]['normalized'];
};
/**
 * Result of hooks
 */
type HooksResult = {
    [K in HooksName]: Hooks[K]['result'];
};
/**
 * Hook item
 */
interface HookItem<T extends HooksName> {
    pluginName: string;
    hook: HooksNormalized[T];
}
/**
 * Hook items queue
 */
interface HookQueue<T extends HooksName> {
    name: T;
    items: HookItem<T>[];
    add: (item: HookItem<T>) => void;
    process: (...args: Parameters<HooksNormalized[T]>) => Promise<HooksResult[T][]>;
}

/**
 * Vuepress plugin system
 */
interface PluginApi {
    /**
     * Plugins that have been used
     */
    plugins: PluginObject[];
    /**
     * All available hooks
     */
    hooks: {
        [K in HooksName]: HookQueue<K>;
    };
    /**
     * Register hooks of plugins
     *
     * Should be invoked before applying a hook
     */
    registerHooks: () => void;
}

/**
 * Vuepress plugin
 *
 * A plugin should be rather:
 * - an object (`PluginObject`)
 * - a function that returns an object (`PluginFunction`)
 *
 * A plugin package should have a `Plugin` as the default export
 */
type Plugin<T extends PluginObject = PluginObject> = PluginFunction<T> | T;
/**
 * Vuepress plugin function
 *
 * It accepts plugin options and vuepress app, returns plugin object
 */
type PluginFunction<T extends PluginObject = PluginObject> = (app: App) => T;
/**
 * Vuepress plugin object
 */
interface PluginObject extends Partial<HooksExposed> {
    /**
     * Name of the plugin
     */
    name: string;
    /**
     * Allow the plugin to be used multiple times or not
     */
    multiple?: boolean;
}
/**
 * Config field for plugins
 */
type PluginConfig = (Plugin | Plugin[])[];

/**
 * Vuepress theme
 *
 * Theme is a special type of plugin, it should be rather:
 * - an object (`ThemeObject`)
 * - a function that returns an object (`ThemeFunction`)
 *
 * A theme package should have a `Theme` as the default export
 */
type Theme = Plugin<ThemeObject>;
/**
 * Vuepress theme function
 */
type ThemeFunction = PluginFunction<ThemeObject>;
/**
 * Vuepress theme object
 */
interface ThemeObject extends Omit<PluginObject, 'multiple'> {
    /**
     * Extended parent theme
     */
    extends?: Theme;
    /**
     * Allow using plugins in theme
     */
    plugins?: PluginConfig;
    /**
     * Allow overriding default templateBuild
     */
    templateBuild?: string;
    /**
     * Allow specifying custom template renderer
     */
    templateBuildRenderer?: TemplateRenderer;
    /**
     * Allow overriding default templateDev
     */
    templateDev?: string;
}
/**
 * Resolved theme info
 */
interface ThemeInfo {
    /**
     * Plugins, including theme itself and plugins used by theme
     */
    plugins: PluginConfig;
    /**
     * Default build template
     */
    templateBuild?: string;
    /**
     * Default build template renderer
     */
    templateBuildRenderer?: TemplateRenderer;
    /**
     * Default dev template
     */
    templateDev?: string;
}

/**
 * Vuepress app common config that shared between dev and build
 */
interface AppConfigCommon extends Partial<SiteData> {
    /**
     * Source directory of the markdown files.
     *
     * Vuepress will load markdown files from this directory.
     *
     * @required
     */
    source: string;
    /**
     * Destination directory of the output files.
     *
     * Vuepress will output the static site files to this directory.
     *
     * @default `${source}/.vuepress/dist`
     */
    dest?: string;
    /**
     * Temp files directory.
     *
     * Vuepress will write temp files to this directory.
     *
     * @default `${source}/.vuepress/.temp`
     */
    temp?: string;
    /**
     * Cache files directory.
     *
     * Vuepress will write cache files to this directory.
     *
     * @default `${source}/.vuepress/.cache`
     */
    cache?: string;
    /**
     * Public files directory.
     *
     * Vuepress will copy the files from public directory to the output directory.
     *
     * @default `${source}/.vuepress/public`
     */
    public?: string;
    /**
     * Whether to enable debug mode
     *
     * @default false
     */
    debug?: boolean;
    /**
     * Markdown options
     *
     * @default {}
     */
    markdown?: MarkdownOptions;
    /**
     * Patterns to match the markdown files as pages
     *
     * @default ['**\/*.md', '!.vuepress', '!node_modules']
     */
    pagePatterns?: string[];
    /**
     * Pattern to generate permalink for pages
     *
     * @default null
     */
    permalinkPattern?: string | null;
    /**
     * Vuepress bundler
     *
     * @required
     */
    bundler: Bundler;
    /**
     * Vuepress theme
     *
     * @required
     */
    theme: Theme;
    /**
     * Vuepress plugins
     *
     * @default []
     */
    plugins?: PluginConfig;
}
/**
 * Vuepress app config for dev
 */
interface AppConfigDev {
    /**
     * Specify the host to use for the dev server
     *
     * @default '0.0.0.0'
     */
    host?: string;
    /**
     * Specify the port to use for the dev server
     *
     * @default 8080
     */
    port?: number;
    /**
     * Whether to open the browser after dev-server had been started
     *
     * @default false
     */
    open?: boolean;
    /**
     * Specify the path of the HTML template to be used for dev
     *
     * @default '@vuepress/client/templates/dev.html'
     */
    templateDev?: string;
}
/**
 * Vuepress app config for build
 */
interface AppConfigBuild {
    /**
     * Determine what resource files should be preloaded. Use boolean value to
     * totally enable / disable.
     *
     * @default true
     */
    shouldPreload?: boolean | ((file: string, type: string) => boolean);
    /**
     * Determine what resource files should be prefetched. Use boolean value to
     * totally enable / disable.
     *
     * @default true
     */
    shouldPrefetch?: boolean | ((file: string, type: string) => boolean);
    /**
     * Specify the path of the HTML template to be used for build
     *
     * @default '@vuepress/client/templates/build.html'
     */
    templateBuild?: string;
    /**
     * Specify the HTML template renderer to be used for build
     *
     * @default `import { templateRenderer } from '@vuepress/utils'`
     */
    templateBuildRenderer?: TemplateRenderer;
}
/**
 * Vuepress app user config.
 *
 * It would be provided by user, typically via a config file.
 */
type AppConfig = AppConfigBuild & AppConfigCommon & AppConfigDev;
/**
 * Vuepress app options that resolved from user config.
 *
 * It fills all optional fields with a default value.
 */
type AppOptions = Required<AppConfig>;

/**
 * Directory util function
 */
type AppDirFunction = (...args: string[]) => string;
/**
 * Directory utils
 */
interface AppDir {
    /**
     * Resolve file path in cache directory
     */
    cache: AppDirFunction;
    /**
     * Resolve file path in temp directory
     */
    temp: AppDirFunction;
    /**
     * Resolve file path in source directory
     */
    source: AppDirFunction;
    /**
     * Resolve file path in dest directory
     */
    dest: AppDirFunction;
    /**
     * Resolve file path in public directory
     */
    public: AppDirFunction;
    /**
     * Resolve file path in client directory
     */
    client: AppDirFunction;
}
/**
 * Environment flags
 */
interface AppEnv {
    /**
     * Is running in build mode or not
     */
    isBuild: boolean;
    /**
     * Is running in dev mode or not
     */
    isDev: boolean;
    /**
     * Is debug mode enabled or not
     */
    isDebug: boolean;
}
/**
 * Write temp file util
 */
type AppWriteTemp = (file: string, content: string) => Promise<string>;

/**
 * App base properties, will be available after creation, even before initialization
 */
interface AppPropertiesBase {
    /**
     * Directory utils.
     */
    dir: AppDir;
    /**
     * Environment flags.
     */
    env: AppEnv;
    /**
     * Options that filled all optional fields with a default value.
     */
    options: AppOptions;
    /**
     * Plugin system.
     */
    pluginApi: PluginApi;
    /**
     * Site data, which will be used in client side.
     */
    siteData: SiteData;
    /**
     * Version of vuepress core.
     */
    version: string;
    /**
     * Initialize app.
     *
     * - Theme and plugin will be loaded.
     * - Layouts and pages will be resolved.
     */
    init: () => Promise<void>;
    /**
     * Prepare data for client and write temp files.
     *
     * Should be called after `app.init()`.
     */
    prepare: () => Promise<void>;
    /**
     * Use a plugin.
     *
     * Should be called before `app.init()`.
     */
    use: (plugin: Plugin) => this;
    /**
     * Util to write temp file
     */
    writeTemp: AppWriteTemp;
}
/**
 * App initialized properties, will only be available after initialization
 */
interface AppPropertiesInitialized {
    /**
     * Markdown-it instance.
     *
     * Only available after initialization
     */
    markdown: Markdown;
    /**
     * Page objects.
     *
     * Only available after initialization
     */
    pages: Page[];
}
/**
 * Vuepress app instance
 */
type App = AppPropertiesBase & AppPropertiesInitialized;
/**
 * Vuepress dev app
 */
interface DevApp extends App {
    /**
     * Start dev server
     *
     * Should be called after `app.prepare()`.
     */
    dev: () => ReturnType<Bundler['dev']>;
}
/**
 * Vuepress build app
 */
interface BuildApp extends App {
    /**
     * Build static files
     *
     * Should be called after `app.prepare()`.
     */
    build: () => ReturnType<Bundler['build']>;
}

/**
 * Generate page chunk temp file of a single page
 */
declare const preparePageChunk: (app: App, page: Page) => Promise<void>;

/**
 * Generate page component temp file of a single page
 */
declare const preparePageComponent: (app: App, page: Page) => Promise<void>;

/**
 * Generate routes temp file
 */
declare const prepareRoutes: (app: App) => Promise<void>;

/**
 * Create vuepress build app.
 */
declare const createBuildApp: (config: AppConfig) => BuildApp;

/**
 * Create vuepress dev app.
 */
declare const createDevApp: (config: AppConfig) => DevApp;

/**
 * Resolve directory utils for vuepress app
 */
declare const resolveAppDir: (options: AppOptions) => AppDir;

/**
 * Create vuepress page object
 */
declare const createPage: (app: App, options: PageOptions) => Promise<Page>;

export { type AliasHook, type App, type AppConfig, type AppConfigBuild, type AppConfigCommon, type AppConfigDev, type AppDir, type AppDirFunction, type AppEnv, type AppOptions, type AppPropertiesBase, type AppPropertiesInitialized, type AppWriteTemp, type BuildApp, type Bundler, type BundlerOptions, type ClientConfigFileHook, type DefineHook, type DevApp, type ExtendsHook, type Hook, type HookItem, type HookQueue, type Hooks, type HooksExposed, type HooksName, type HooksNormalized, type HooksResult, type LifeCycleHook, type Page, type PageOptions, type Plugin, type PluginApi, type PluginConfig, type PluginFunction, type PluginObject, type Theme, type ThemeFunction, type ThemeInfo, type ThemeObject, createBuildApp, createDevApp, createPage, preparePageChunk, preparePageComponent, prepareRoutes, resolveAppDir };
