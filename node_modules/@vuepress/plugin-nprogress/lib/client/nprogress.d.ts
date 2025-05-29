/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
interface NProgress {
    percent: number | null;
    set(number: number): NProgress;
    isStarted(): boolean;
    start(): NProgress;
    done(force?: boolean): NProgress;
    increase(amount?: number): NProgress;
    trickle(): NProgress;
    render(fromStart?: boolean): HTMLDivElement;
    remove(): void;
    isRendered(): boolean;
}
export declare const nprogress: NProgress;
export {};
