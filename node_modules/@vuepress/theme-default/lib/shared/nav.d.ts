/**
 * Base nav item, displayed as text
 */
export interface NavItemOptions {
    text: string;
    ariaLabel?: string;
}
/**
 * Options for `<AutoLink>`
 */
export interface AutoLinkOptions extends NavItemOptions {
    /**
     * Link of item
     */
    link: string;
    /**
     * Rel of `<a>` tag
     */
    rel?: string;
    /**
     * Target of `<a>` tag
     */
    target?: string;
    /**
     * Regexp mode to be active
     */
    activeMatch?: string;
    /**
     * Whether it's active only when exact match
     */
    exact?: boolean;
}
