import { strFromU8, strToU8, unzlibSync, zlibSync } from 'fflate/node';
/**
 * Encode and compress data
 */
export const encodeData = (data, level = 6) => {
    const buffer = strToU8(data);
    // zlib headers can be found at https://stackoverflow.com/a/54915442
    const zipped = zlibSync(buffer, { level });
    const binary = strFromU8(zipped, true);
    return Buffer.from(binary, 'binary').toString('base64');
};
/**
 * Decode and unzip data
 */
export const decodeData = (base64) => {
    const binary = Buffer.from(base64, 'base64').toString('binary');
    return strFromU8(unzlibSync(strToU8(binary, true)));
};
