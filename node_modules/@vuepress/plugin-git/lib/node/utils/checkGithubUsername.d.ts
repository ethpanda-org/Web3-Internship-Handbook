/**
 * Check if the username is a valid github username
 *
 * - length <= 39
 * - starts with a letter
 * - contains only letters, numbers, and hyphens
 * - does not start or end with a hyphen
 * - does not contain consecutive hyphens
 */
export declare const checkGithubUsername: (username: string) => boolean;
