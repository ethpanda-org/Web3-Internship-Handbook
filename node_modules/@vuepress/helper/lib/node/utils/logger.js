/* eslint-disable no-console */
import { colors, ora } from 'vuepress/utils';
/**
 * Logger utils
 */
export class Logger {
    name;
    constructor(
    /**
     * Plugin/Theme name
     */
    name = '') {
        this.name = name;
    }
    init(text) {
        return ora({
            prefixText: colors.blue(`${this.name}: `) || '',
            text,
        });
    }
    /**
     * Create a loading spinner with text
     */
    load(msg) {
        const instance = this.init(msg);
        return {
            succeed: (text) => instance.succeed(text),
            fail: (text) => instance.succeed(text),
        };
    }
    /**
     * Log info msg
     *
     * @param text Hint text
     * @returns Ora Instance
     */
    info(text = '', ...args) {
        this.init(colors.blue(text)).info();
        if (args.length)
            console.info(...args);
    }
    /**
     * Log success msg
     */
    succeed(text = '', ...args) {
        this.init(colors.green(text)).succeed();
        if (args.length)
            console.log(...args);
    }
    /**
     * Log warning msg
     */
    warn(text = '', ...args) {
        this.init(colors.yellow(text)).warn();
        if (args.length)
            console.warn(...args);
    }
    /**
     * Log error msg
     */
    error(text = '', ...args) {
        this.init(colors.red(text)).fail();
        if (args.length)
            console.error(...args);
    }
}
