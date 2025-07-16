/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume';

export const zhNavbar = defineNavbarConfig([
  { text: '开始阅读', link: '/zh/README.md' },
  {
    text: '参与和支持',
    link: 'https://github.com/ethpanda-org/Web3-Internship-Handbook/blob/main/CONTRIBUTING.md',
  },
  { text: '致谢名单', link: '/zh/acknowledgments.md' },
]);

export const enNavbar = defineNavbarConfig([
  { text: 'Chinese Version', link: '/zh/README.md' },
  {
    text: 'Join Development',
    link: 'https://github.com/ethpanda-org/Web3-Internship-Handbook/blob/main/CONTRIBUTING.md',
  },
]);
