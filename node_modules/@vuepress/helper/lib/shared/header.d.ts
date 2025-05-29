export type HeaderLevels = number | 'deep' | false | [number, number];
export interface GetHeadersOptions {
    /**
     * The selector of the headers.
     *
     * It will be passed as an argument to `document.querySelectorAll(selector)`,
     * so you should pass a `CSS Selector` string.
     *
     * @default '[vp-content] h1, [vp-content] h2, [vp-content] h3, [vp-content] h4, [vp-content] h5, [vp-content] h6'
     */
    selector?: string;
    /**
     * Ignore specific elements within the header.
     *
     * The Array of `CSS Selector`
     *
     * @default []
     */
    ignore?: string[];
    /**
     * The levels of the headers.
     *
     * `1` to `6` for `<h1>` to `<h6>`
     *
     * - `false`: No headers.
     * - `number`: only headings of that level will be displayed.
     * - `[number, number]: headings level tuple, where the first number should be less than the second number, for example, `[2, 4]` which means all headings from `<h2>` to `<h4>` will be displayed.
     * - `deep`: same as `[2, 6]`, which means all headings from `<h2>` to `<h6>` will be displayed.
     *
     * @default 2
     */
    levels?: HeaderLevels;
}
