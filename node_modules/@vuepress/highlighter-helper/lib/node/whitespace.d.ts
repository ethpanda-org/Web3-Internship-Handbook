export declare const WHITESPACE_REGEXP: RegExp;
export declare const NO_WHITESPACE_REGEXP: RegExp;
export type WhitespacePosition = 'all' | 'boundary' | 'trailing';
export declare const resolveWhitespacePosition: (info: string, globalOption: WhitespacePosition | true) => WhitespacePosition | false;
