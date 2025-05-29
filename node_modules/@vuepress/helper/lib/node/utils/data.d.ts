import type { DeflateOptions } from 'fflate';
/**
 * Encode and compress data
 */
export declare const encodeData: (data: string, level?: DeflateOptions["level"]) => string;
/**
 * Decode and unzip data
 */
export declare const decodeData: (base64: string) => string;
