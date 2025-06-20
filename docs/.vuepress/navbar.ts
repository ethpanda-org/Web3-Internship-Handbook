/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  // 页面跳转已移除
  { text: '开始阅读', link: '/web3-handbook/README.md' },
  { text: '关于我们', link: '/web3-handbook/README.md' },
  { text: '参与和支持', link: '/web3-handbook/README.md' },
])

export const enNavbar = defineNavbarConfig([
  // 页面跳转已移除
  { text: 'Start Reading', link: '/web3-handbook/README.md' },
  { text: 'About Us', link: '/web3-handbook/README.md' },
  { text: 'Contact Us', link: '/web3-handbook/README.md' },
])

