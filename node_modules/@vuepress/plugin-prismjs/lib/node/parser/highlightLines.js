/**
 * Resolve highlight-lines ranges from token info
 */
export const getHighlightLinesRange = (info) => {
    // try to match highlight-lines mark
    const match = info.match(/{([\d,-]+)}/);
    // no highlight-lines mark, return `null`
    if (match === null) {
        return null;
    }
    // resolve lines ranges from the highlight-lines mark
    return match[1].split(',').map((item) => {
        const range = item.split('-');
        if (range.length === 1) {
            range.push(range[0]);
        }
        return range.map((line) => Number.parseInt(line, 10));
    });
};
/**
 * Check if a line number is in ranges
 */
const isLineHighlighted = (lineNumber, ranges) => ranges.some(([start, end]) => lineNumber >= start && lineNumber <= end);
export const highlightCodeLines = (parser, ranges) => {
    if (ranges?.length) {
        parser.line((node, index) => {
            if (isLineHighlighted(index, ranges)) {
                node.classList.push('highlighted');
            }
        });
    }
};
