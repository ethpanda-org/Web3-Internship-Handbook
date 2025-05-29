import '../styles/vars.css';
import '../styles/changelog.css';
export declare const GitChangelog: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /** Title of changelog */
    title: StringConstructor;
    /** header level of changelog */
    headerLevel: {
        type: NumberConstructor;
        default: number;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** Title of changelog */
    title: StringConstructor;
    /** header level of changelog */
    headerLevel: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    headerLevel: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
