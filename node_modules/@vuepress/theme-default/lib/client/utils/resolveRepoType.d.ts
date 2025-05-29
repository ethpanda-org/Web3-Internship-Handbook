export type RepoType = 'Bitbucket' | 'Gitee' | 'GitHub' | 'GitLab' | null;
export declare const resolveRepoType: (repo: string) => RepoType;
