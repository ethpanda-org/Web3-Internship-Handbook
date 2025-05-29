import { isPlainObject } from 'vuepress/shared';
const PATTERN_PRESET = {
    github: {
        issue: ':repo/issues/:issue',
        tag: ':repo/releases/tag/:tag',
        commit: ':repo/commit/:hash',
    },
    gitlab: {
        issue: ':repo/-/issues/:issue',
        tag: ':repo/-/releases/:tag',
        commit: ':repo/-/commit/:hash',
    },
    gitee: {
        issue: ':repo/issues/:issue',
        tag: ':repo/releases/tag/:tag',
        commit: ':repo/commit/:hash',
    },
    bitbucket: {
        issue: ':repo/issues/:issue',
        tag: ':repo/src/:hash',
        commit: ':repo/commits/:hash',
    },
};
const getPattern = ({ commitUrlPattern, issueUrlPattern, tagUrlPattern }, provider) => {
    const fallback = provider ? PATTERN_PRESET[provider] : {};
    return {
        commit: commitUrlPattern ?? fallback.commit,
        issue: issueUrlPattern ?? fallback.issue,
        tag: tagUrlPattern ?? fallback.tag,
    };
};
export const injectGitOptions = (provider, changelog) => {
    const data = {
        provider,
    };
    if (changelog) {
        const changelogOptions = isPlainObject(changelog) ? changelog : {};
        data.pattern = getPattern(changelogOptions, provider);
        data.repo = changelogOptions.repoUrl;
    }
    return data;
};
