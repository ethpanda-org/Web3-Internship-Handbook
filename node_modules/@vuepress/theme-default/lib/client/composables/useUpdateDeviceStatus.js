import { useEventListener } from '@vueuse/core';
import { onMounted } from 'vue';
import cssVariables from '../styles/_variables.module.scss';
export var DeviceType;
(function (DeviceType) {
    DeviceType["Mobile"] = "mobile";
})(DeviceType || (DeviceType = {}));
const DeviceTypeMap = {
    [DeviceType.Mobile]: Number.parseInt(cssVariables.mobile.replace('px', ''), 10),
};
/**
 * add listener to detect screen though device type
 */
export const useUpdateDeviceStatus = (deviceType, callback) => {
    const width = DeviceTypeMap[deviceType];
    if (!Number.isInteger(width)) {
        if (__VUEPRESS_DEV__)
            throw new Error('device width must be a integer');
        return;
    }
    useEventListener('orientationchange', () => {
        callback(width);
    }, false);
    useEventListener('resize', () => {
        callback(width);
    }, false);
    onMounted(() => {
        callback(width);
    });
};
