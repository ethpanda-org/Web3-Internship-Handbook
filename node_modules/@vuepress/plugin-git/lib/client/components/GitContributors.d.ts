import type { FunctionalComponent } from 'vue';
import type { GitContributorInfo } from '../../shared/index.js';
import '../styles/contributors.css';
export declare const GitContributor: FunctionalComponent<GitContributorInfo>;
export declare const GitContributors: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /** Contributor title */
    title: StringConstructor;
    /** header level of contributor title */
    headerLevel: {
        type: NumberConstructor;
        default: number;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Contributor title */
    title: StringConstructor;
    /** header level of contributor title */
    headerLevel: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    headerLevel: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
