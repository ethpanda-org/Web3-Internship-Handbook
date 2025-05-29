import type { RepoType } from '@theme/resolveRepoType';
export declare const EDIT_LINK_PATTERNS: Record<Exclude<RepoType, null>, string>;
export declare const resolveEditLink: ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern, }: {
    docsRepo: string;
    docsBranch: string;
    docsDir: string;
    filePathRelative: string | null;
    editLinkPattern?: string;
}) => string | null;
