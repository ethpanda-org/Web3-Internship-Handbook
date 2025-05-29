declare const dedent: (text: string) => string;

declare const escapeHtml: (unsafeHTML: string) => string;
/**
 * Escapes special characters in string s such that the string
 * can be used in `new RegExp`. For example "[" becomes "\\[".
 */
declare const escapeRegExp: (regexp: string) => string;

declare const NEWLINE_RE: RegExp;
declare const UNESCAPE_RE: RegExp;

export { NEWLINE_RE, UNESCAPE_RE, dedent, escapeHtml, escapeRegExp };
