import { defineClientConfig } from 'vuepress/client';
import { useCopyCode } from './composables/index.js';
export default defineClientConfig({
    setup: () => {
        useCopyCode({
            selector: __CC_SELECTOR__,
            ignoreSelector: __CC_IGNORE_SELECTOR__,
            inlineSelector: __CC_INLINE_SELECTOR__,
            locales: __CC_LOCALES__,
            duration: __CC_DURATION__,
            showInMobile: __CC_SHOW_IN_MOBILE__,
        });
    },
});
