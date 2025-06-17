import { GitContributors } from "/Users/apple/Desktop/ETHPanda-intern/internbook/Web3-Internship-Handbook/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
