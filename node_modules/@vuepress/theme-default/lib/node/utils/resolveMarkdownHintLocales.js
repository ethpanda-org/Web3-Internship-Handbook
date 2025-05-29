/**
 * Resolve options for @vuepress/plugin-markdown-container
 *
 * For custom containers default title
 */
export const resolveMarkdownHintLocales = (localeOptions) => Object.entries(localeOptions.locales ?? {}).reduce((result, [key, value]) => {
    result[key] = {};
    if (value.tip)
        result[key].tip = value.tip;
    if (value.warning)
        result[key].warning = value.warning;
    if (value.danger)
        result[key].caution = value.danger;
    if (value.important)
        result[key].important = value.important;
    if (value.note)
        result[key].note = value.note;
    return result;
}, {});
