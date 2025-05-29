import type { ComputedRef, InjectionKey } from 'vue';
import type { PageData, PageHeader } from 'vuepress/client';
import type { SidebarArrayOptions, SidebarObjectOptions, SidebarOptions } from '../../shared/index.js';
import type { SidebarHeaderItem, SidebarItem } from '../typings.js';
/**
 * Util to transform page header to sidebar item
 */
export declare const resolveSidebarPageHeader: (header: PageHeader) => SidebarHeaderItem;
export declare const resolveSidebarPageHeaders: (headers?: PageHeader[]) => SidebarHeaderItem[];
/**
 * Resolve current page and its header to sidebar items if the config is `heading`
 */
export declare const resolveSidebarHeadingItem: (page: PageData, headers: PageHeader[]) => SidebarItem[];
/**
 * Resolve sidebar items if the config is an array
 */
export declare const resolveArraySidebarItems: (sidebarConfig: SidebarArrayOptions, headers: PageHeader[], path: string, prefix?: string) => SidebarItem[];
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
export declare const resolveMultiSidebarItems: (sidebarConfig: SidebarObjectOptions, page: PageData, headers: PageHeader[], path: string) => SidebarItem[];
export type SidebarItemsRef = ComputedRef<SidebarItem[]>;
export declare const sidebarItemsSymbol: InjectionKey<SidebarItemsRef>;
/**
 * Inject sidebar items global computed
 */
export declare const useSidebarItems: () => SidebarItemsRef;
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
export declare const resolveSidebarItems: (sidebarConfig: SidebarOptions | false, page: PageData, path: string, routeLocale: string, headers: PageHeader[]) => SidebarItem[];
/**
 * Create sidebar items ref and provide as global computed in setup
 */
export declare const setupSidebarItems: () => void;
