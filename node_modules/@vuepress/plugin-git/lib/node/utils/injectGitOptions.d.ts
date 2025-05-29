import type { GitInjectOptions, KnownGitProvider } from '../../shared/index.js';
import type { ChangelogOptions } from '../options.js';
export declare const injectGitOptions: (provider: KnownGitProvider | null, changelog: ChangelogOptions | boolean) => GitInjectOptions;
