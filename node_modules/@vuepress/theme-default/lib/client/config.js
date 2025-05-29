import { setupDarkMode } from '@theme/useDarkMode';
import { setupHeaders } from '@theme/useHeaders';
import { useScrollPromise } from '@theme/useScrollPromise';
import { setupSidebarItems } from '@theme/useSidebarItems';
import { hasGlobalComponent } from '@vuepress/helper/client';
import { defineClientConfig } from 'vuepress/client';
import { Badge } from './components/global/index.js';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';
import '@vuepress/helper/colors.css';
import '@vuepress/helper/normalize.css';
import './styles/index.scss';
export default defineClientConfig({
    enhance({ app, router }) {
        if (!hasGlobalComponent('Badge'))
            app.component('Badge', Badge);
        // handle scrollBehavior with transition
        const scrollBehavior = router.options.scrollBehavior;
        router.options.scrollBehavior = async (...args) => {
            await useScrollPromise().wait();
            return scrollBehavior(...args);
        };
    },
    setup() {
        setupDarkMode();
        setupHeaders();
        setupSidebarItems();
    },
    layouts: {
        Layout,
        NotFound,
    },
});
