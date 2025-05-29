import type { CodeParser } from './getCodeParser';
export type HighlightLinesRange = [start: number, end: number];
/**
 * Resolve highlight-lines ranges from token info
 */
export declare const getHighlightLinesRange: (info: string) => HighlightLinesRange[] | null;
export declare const highlightCodeLines: (parser: CodeParser, ranges: HighlightLinesRange[] | null) => void;
