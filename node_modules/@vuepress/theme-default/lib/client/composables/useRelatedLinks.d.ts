import type { ComputedRef } from 'vue';
import type { AutoLinkOptions } from '../../shared/index.js';
interface RelatedLinks {
    prevLink: ComputedRef<AutoLinkOptions | null>;
    nextLink: ComputedRef<AutoLinkOptions | null>;
}
export declare const useRelatedLinks: () => RelatedLinks;
export {};
