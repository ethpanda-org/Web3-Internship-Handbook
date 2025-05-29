import type { HeaderItem } from '@vuepress/helper/client';
import type { InjectionKey, Ref } from 'vue';
export type HeadersRef = Ref<HeaderItem[]>;
export declare const headersSymbol: InjectionKey<HeadersRef>;
/**
 * Inject headers
 */
export declare const useHeaders: () => HeadersRef;
export declare const setupHeaders: () => void;
