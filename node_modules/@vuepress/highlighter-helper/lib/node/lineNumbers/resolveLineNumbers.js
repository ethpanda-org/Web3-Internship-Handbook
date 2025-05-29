const LINE_NUMBERS_REGEXP = /:line-numbers\b/;
const NO_LINE_NUMBERS_REGEXP = /:no-line-numbers\b/;
const LINE_NUMBERS_START_REGEXP = /:line-numbers=(\d+)\b/;
/**
 * Resolve the `:line-numbers` `:line-numbers=num` / `:no-line-numbers` mark from token info
 */
export const resolveLineNumbers = (info) => {
    const lineNumber = LINE_NUMBERS_START_REGEXP.exec(info)?.[1];
    if (lineNumber) {
        return Number(lineNumber);
    }
    if (LINE_NUMBERS_REGEXP.test(info)) {
        return true;
    }
    if (NO_LINE_NUMBERS_REGEXP.test(info)) {
        return false;
    }
    return null;
};
