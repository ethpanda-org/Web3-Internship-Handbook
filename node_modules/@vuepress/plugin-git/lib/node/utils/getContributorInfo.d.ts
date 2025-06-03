import type { ContributorInfo } from '../options.js';
export declare const getContributorInfo: (contributor: {
    name: string;
    email?: string;
}, infos?: ContributorInfo[]) => ContributorInfo | null;
