import type { CodeParser } from './getCodeParser.js';
export declare const createNotationRule: (parser: CodeParser, pattern: RegExp, onMatch: (match: string[], index: number) => boolean) => void;
