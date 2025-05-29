import { ensureEndingSlash } from 'vuepress/shared';
import { getDirname, path } from 'vuepress/utils';
const { url } = import.meta;
const __dirname = getDirname(url);
const CLIENT_FOLDER = ensureEndingSlash(path.resolve(__dirname, '../client'));
export const prepareClientConfigFile = (app, { changelog, contributors }) => {
    const imports = new Set();
    const enhances = new Set();
    if (contributors ?? true) {
        imports.add(`import { GitContributors } from "${CLIENT_FOLDER}components/GitContributors.js";`);
        enhances.add(`app.component("GitContributors", GitContributors);`);
    }
    if (changelog) {
        imports.add(`import { GitChangelog } from "${CLIENT_FOLDER}components/GitChangelog.js";`);
        enhances.add(`app.component("GitChangelog", GitChangelog);`);
    }
    return app.writeTemp('git/config.js', `\
${Array.from(imports.values()).join('\n')}

export default {
  enhance: ({ app }) => {
${Array.from(enhances.values())
        .map((line) => `    ${line}`)
        .join('\n')}
  },
};
`);
};
