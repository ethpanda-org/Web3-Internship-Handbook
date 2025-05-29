/**
 * Logger utils
 */
export declare class Logger {
    /**
     * Plugin/Theme name
     */
    private readonly name;
    constructor(
    /**
     * Plugin/Theme name
     */
    name?: string);
    private init;
    /**
     * Create a loading spinner with text
     */
    load(msg: string): {
        succeed: (text?: string) => void;
        fail: (text?: string) => void;
    };
    /**
     * Log info msg
     *
     * @param text Hint text
     * @returns Ora Instance
     */
    info(text?: string, ...args: unknown[]): void;
    /**
     * Log success msg
     */
    succeed(text?: string, ...args: unknown[]): void;
    /**
     * Log warning msg
     */
    warn(text?: string, ...args: unknown[]): void;
    /**
     * Log error msg
     */
    error(text?: string, ...args: unknown[]): void;
}
