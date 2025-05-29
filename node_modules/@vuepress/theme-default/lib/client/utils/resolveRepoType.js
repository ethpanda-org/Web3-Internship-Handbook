import { isLinkHttp } from 'vuepress/shared';
export const resolveRepoType = (repo) => {
    if (!isLinkHttp(repo) || repo.includes('github.com'))
        return 'GitHub';
    if (repo.includes('bitbucket.org'))
        return 'Bitbucket';
    if (repo.includes('gitlab.com'))
        return 'GitLab';
    if (repo.includes('gitee.com'))
        return 'Gitee';
    return null;
};
