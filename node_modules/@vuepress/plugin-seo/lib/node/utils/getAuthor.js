import { isArray, isPlainObject, isString } from '@vuepress/helper';
const isSEOAuthor = (author) => isPlainObject(author) && isString(author.name);
export const getSEOAuthor = (author) => {
    if (author) {
        if (isArray(author))
            return author
                .map((item) => isString(item) ? { name: item } : isSEOAuthor(item) ? item : null)
                .filter((item) => item !== null);
        if (isString(author))
            return [{ name: author }];
        if (isSEOAuthor(author))
            return [author];
        // eslint-disable-next-line no-console
        console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string | undefined\`, but got`, author);
        return [];
    }
    return [];
};
