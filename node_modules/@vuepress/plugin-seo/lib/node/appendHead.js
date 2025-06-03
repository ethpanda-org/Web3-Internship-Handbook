import { keys, startsWith } from '@vuepress/helper';
const appendMetaToHead = (head, { name, content, attribute = ['article:', 'og:'].some((type) => startsWith(name, type))
    ? 'property'
    : 'name', }) => {
    if (content)
        head.unshift(['meta', { [attribute]: name, content }]);
};
export const addOGP = (head, content) => {
    keys(content)
        .reverse()
        .forEach((property) => {
        switch (property) {
            case 'article:tag':
                ;
                content['article:tag'].forEach((tag) => {
                    appendMetaToHead(head, { name: 'article:tag', content: tag });
                });
                break;
            case 'og:locale:alternate':
                content['og:locale:alternate'].forEach((locale) => {
                    if (locale !== content['og:locale'])
                        appendMetaToHead(head, {
                            name: 'og:locale:alternate',
                            content: locale,
                        });
                });
                break;
            default:
                if (content[property])
                    appendMetaToHead(head, {
                        name: property,
                        content: content[property],
                    });
        }
    });
};
export const appendJSONLD = (head, content) => {
    head.unshift([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(content),
    ]);
};
export const appendCanonical = (head, url) => {
    if (url)
        head.unshift(['link', { rel: 'canonical', href: url }]);
};
export const appendAlternate = (head, urls) => {
    urls.forEach(({ lang, path }) => {
        head.unshift([
            'link',
            { rel: 'alternate', hreflang: lang.toLowerCase(), href: path },
        ]);
    });
};
