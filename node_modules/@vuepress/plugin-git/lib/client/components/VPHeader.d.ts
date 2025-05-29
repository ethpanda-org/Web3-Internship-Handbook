import type { FunctionalComponent } from 'vue';
export interface VPHeaderProps {
    /** header text */
    text: string;
    /** header anchor */
    anchor: string;
    /**
     * header level
     *
     * @default 2
     */
    level?: number;
}
export declare const VPHeader: FunctionalComponent<VPHeaderProps>;
