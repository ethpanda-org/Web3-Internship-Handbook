/**
 * This module processes the output of prismjs by wrapping each line of code
 * with a `<span class="line">` and provides simple operations for the line node.
 */
export interface OpenTag {
    /**
     * @example <tag
     */
    before: string;
    classList: string[];
    /**
     * @example >
     */
    after: string;
    content: string;
    toString(): string;
}
type LineHandler = (node: OpenTag, index: number) => void;
export interface CodeParser {
    pre: OpenTag;
    code: OpenTag;
    lines: OpenTag[];
    /**
     * Add a handler for each the line `<span class="line">`
     */
    line: (handler: LineHandler) => void;
    /**
     * Get the string representation of the parsed code
     */
    stringify: () => string;
}
export declare const getCodeParser: (html: string) => CodeParser;
export {};
