import { createHash } from 'node:crypto';
export const digestSHA256 = (message) => {
    const hash = createHash('sha256');
    hash.update(message);
    return hash.digest('hex');
};
