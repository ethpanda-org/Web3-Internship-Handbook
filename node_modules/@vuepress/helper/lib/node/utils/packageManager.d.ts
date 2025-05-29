export type PackageManager = 'bun' | 'npm' | 'pnpm' | 'yarn';
/**
 * Check if a package manager is installed globally.
 *
 * @param packageManager package manager
 */
export declare const isPackageManagerInstalled: (packageManager: PackageManager) => boolean;
/**
 * Get package manager setting in package.json
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of lock file
 */
export declare const getPackageManagerSetting: (cwd?: string, deep?: boolean) => PackageManager | null;
/**
 * Get the type of lock file.
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of lock file
 */
export declare const getTypeofLockFile: (cwd?: string, deep?: boolean) => PackageManager | null;
/**
 * Detect the package manager used in the current project.
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of package manager
 */
export declare const getPackageManager: (cwd?: string, deep?: boolean) => PackageManager;
