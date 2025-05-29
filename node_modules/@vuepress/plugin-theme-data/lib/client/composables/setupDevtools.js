import { setupDevtoolsPlugin } from '@vue/devtools-api';
import { watch } from 'vue';
import { DEVTOOLS } from 'vuepress/client';
const PLUGIN_ID = 'org.vuejs.vuepress.plugin-theme-data';
const PLUGIN_LABEL = 'VuePress Theme Data';
const INSPECTOR_THEME_DATA_ID = 'THEME_DATA';
const INSPECTOR_THEME_DATA_LABEL = 'Theme Data';
export const setupDevTools = (app, themeData, themeLocaleData) => {
    // setup devtools in dev mode
    if (__VUEPRESS_DEV__ || __VUE_PROD_DEVTOOLS__) {
        setupDevtoolsPlugin({
            // fix recursive reference
            app: app,
            id: PLUGIN_ID,
            label: PLUGIN_LABEL,
            packageName: '@vuepress/plugin-theme-data',
            homepage: 'https://vuepress.vuejs.org',
            logo: 'https://vuepress.vuejs.org/images/hero.png',
            componentStateTypes: [DEVTOOLS.COMPONENT_STATE_TYPE],
        }, (api) => {
            api.on.inspectComponent((payload) => {
                payload.instanceData.state.push({
                    type: 'VuePress',
                    key: 'themeData',
                    editable: false,
                    value: themeData.value,
                }, {
                    type: 'VuePress',
                    key: 'themeLocaleData',
                    editable: false,
                    value: themeLocaleData.value,
                });
            });
            // setup custom inspector
            api.addInspector({
                id: DEVTOOLS.INSPECTOR_ID,
                label: DEVTOOLS.INSPECTOR_LABEL,
                icon: 'article',
            });
            api.on.getInspectorTree((payload) => {
                if (payload.inspectorId !== DEVTOOLS.INSPECTOR_ID)
                    return;
                payload.rootNodes.push({
                    id: INSPECTOR_THEME_DATA_ID,
                    label: INSPECTOR_THEME_DATA_LABEL,
                    children: [
                        {
                            id: 'themeData',
                            label: 'themeData',
                        },
                        {
                            id: 'themeLocaleData',
                            label: 'themeLocaleData',
                        },
                    ],
                });
            });
            api.on.getInspectorState((payload) => {
                if (payload.inspectorId !== DEVTOOLS.INSPECTOR_ID)
                    return;
                // root nodes state
                if (payload.nodeId === INSPECTOR_THEME_DATA_ID) {
                    payload.state[INSPECTOR_THEME_DATA_LABEL].push({
                        key: 'themeData',
                        value: themeData.value,
                    }, {
                        key: 'themeLocaleData',
                        value: themeLocaleData.value,
                    });
                }
                // root nodes children state
                if (['themeData', 'themeLocaleData'].includes(payload.nodeId)) {
                    payload.state = {
                        [DEVTOOLS.INSPECTOR_STATE_SECTION_NAME]: [
                            {
                                key: payload.nodeId,
                                value: payload.nodeId === 'themeData'
                                    ? themeData.value
                                    : themeLocaleData.value,
                            },
                        ],
                    };
                }
            });
            // refresh the component state and inspector state
            watch([themeData, themeLocaleData], () => {
                api.notifyComponentUpdate();
                api.sendInspectorState(DEVTOOLS.INSPECTOR_ID);
            });
        });
    }
};
