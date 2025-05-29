import { spawnSync } from 'node:child_process';
import { fs, path } from 'vuepress/utils';
const globalCache = new Map();
const localCache = new Map();
const PACKAGE_CONFIG = 'package.json';
const NPM_LOCK = 'package-lock.json';
const YARN_LOCK = 'yarn.lock';
const PNPM_LOCK = 'pnpm-lock.yaml';
const BUN_LOCK = 'bun.lockb';
const isInstalled = (packageManager) => {
    try {
        return (spawnSync(`${packageManager} --version`, { shell: true, stdio: 'ignore' })
            .status === 0);
    }
    catch {
        return false;
    }
};
/**
 * Check if a package manager is installed globally.
 *
 * @param packageManager package manager
 */
export const isPackageManagerInstalled = (packageManager) => {
    const key = `global:${packageManager}`;
    const status = globalCache.get(key);
    if (status !== undefined)
        return status;
    if (isInstalled(packageManager)) {
        globalCache.set(key, true);
        return true;
    }
    return false;
};
/**
 * Get package manager setting in package.json
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of lock file
 */
export const getPackageManagerSetting = (cwd = process.cwd(), deep = true) => {
    const key = `package:${cwd}`;
    const status = localCache.get(key);
    if (status !== undefined)
        return status;
    if (fs.existsSync(path.resolve(cwd, PACKAGE_CONFIG))) {
        const { packageManager: packageManagerSettings } = JSON.parse(fs.readFileSync(path.resolve(cwd, PACKAGE_CONFIG), 'utf-8'));
        if (packageManagerSettings) {
            const packageManager = packageManagerSettings.split('@')[0];
            localCache.set(key, packageManager);
            return packageManager;
        }
    }
    if (deep) {
        let dir = cwd;
        while (dir !== path.dirname(dir)) {
            dir = path.dirname(dir);
            if (fs.existsSync(path.resolve(cwd, PACKAGE_CONFIG))) {
                const { packageManager: packageManagerSettings } = JSON.parse(fs.readFileSync(path.resolve(cwd, PACKAGE_CONFIG), 'utf-8'));
                if (packageManagerSettings) {
                    const packageManager = packageManagerSettings.split('@')[0];
                    localCache.set(key, packageManager);
                    return packageManager;
                }
            }
        }
    }
    return null;
};
/**
 * Get the type of lock file.
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of lock file
 */
export const getTypeofLockFile = (cwd = process.cwd(), deep = true) => {
    const key = `local:${cwd}`;
    const status = localCache.get(key);
    if (status !== undefined)
        return status;
    if (fs.existsSync(path.resolve(cwd, PNPM_LOCK))) {
        localCache.set(key, 'pnpm');
        return 'pnpm';
    }
    if (fs.existsSync(path.resolve(cwd, YARN_LOCK))) {
        localCache.set(key, 'yarn');
        return 'yarn';
    }
    if (fs.existsSync(path.resolve(cwd, BUN_LOCK))) {
        localCache.set(key, 'bun');
        return 'bun';
    }
    if (fs.existsSync(path.resolve(cwd, NPM_LOCK))) {
        localCache.set(key, 'npm');
        return 'npm';
    }
    if (deep) {
        let dir = cwd;
        while (dir !== path.dirname(dir)) {
            dir = path.dirname(dir);
            if (fs.existsSync(path.resolve(dir, PNPM_LOCK))) {
                localCache.set(key, 'pnpm');
                return 'pnpm';
            }
            if (fs.existsSync(path.resolve(dir, YARN_LOCK))) {
                localCache.set(key, 'yarn');
                return 'yarn';
            }
            if (fs.existsSync(path.resolve(cwd, BUN_LOCK))) {
                localCache.set(key, 'bun');
                return 'bun';
            }
            if (fs.existsSync(path.resolve(dir, NPM_LOCK))) {
                localCache.set(key, 'npm');
                return 'npm';
            }
        }
    }
    return null;
};
/**
 * Detect the package manager used in the current project.
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of package manager
 */
export const getPackageManager = (cwd = process.cwd(), deep = true) => getPackageManagerSetting(cwd, deep) ||
    getTypeofLockFile(cwd, deep) ||
    (isPackageManagerInstalled('pnpm')
        ? 'pnpm'
        : isPackageManagerInstalled('yarn')
            ? 'yarn'
            : isPackageManagerInstalled('bun')
                ? 'bun'
                : 'npm');
