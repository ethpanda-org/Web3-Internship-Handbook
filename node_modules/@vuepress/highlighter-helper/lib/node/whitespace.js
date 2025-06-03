export const WHITESPACE_REGEXP = /:whitespace(?:=(all|boundary|trailing)?)?\b/;
export const NO_WHITESPACE_REGEXP = /:no-whitespace\b/;
const AVAILABLE_WHITESPACE_POSITIONS = ['all', 'boundary', 'trailing'];
export const resolveWhitespacePosition = (info, globalOption) => {
    if (NO_WHITESPACE_REGEXP.test(info)) {
        return false;
    }
    const defaultPosition = AVAILABLE_WHITESPACE_POSITIONS.includes(globalOption)
        ? globalOption
        : false;
    const match = info.match(WHITESPACE_REGEXP);
    if (match) {
        if (AVAILABLE_WHITESPACE_POSITIONS.includes(match[1])) {
            return match[1];
        }
        return defaultPosition || 'all';
    }
    return defaultPosition;
};
