import { computed } from 'vue';
import { clientDataSymbol, defineClientConfig } from 'vuepress/client';
import { resolveThemeLocaleData, setupDevTools, themeLocaleDataSymbol, useThemeData, } from './composables/index.js';
import {} from './composables/setupDevtools.js';
export default defineClientConfig({
    enhance({ app }) {
        // provide theme data & theme locale data
        const themeData = useThemeData();
        const clientData = app._context.provides[clientDataSymbol];
        const themeLocaleData = computed(() => resolveThemeLocaleData(themeData.value, clientData.routeLocale.value));
        app.provide(themeLocaleDataSymbol, themeLocaleData);
        Object.defineProperties(app.config.globalProperties, {
            $theme: {
                get() {
                    return themeData.value;
                },
            },
            $themeLocale: {
                get() {
                    return themeLocaleData.value;
                },
            },
        });
        // setup devtools in dev mode
        setupDevTools(app, themeData, themeLocaleData);
    },
});
