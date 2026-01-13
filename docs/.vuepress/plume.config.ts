/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume';
import { enNavbar, zhNavbar, zhTWNavbar } from './navbar';
import { enNotes, zhNotes, zhTWNotes } from './notes';

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  appearance: false, // 配置 深色模式

  social: [
    {
      icon: 'github',
      link: 'https://github.com/ethpanda-org/Web3-Internship-Handbook',
    },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  prevPage: true, // 是否启用上一页链接
  nextPage: true, // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: '© Web3 实习手册 | 由 ETHPanda 和 LXDAO 团队维护',
    // 你可以自定义更多内容，如：copyright: ''
  },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true, // 启用 页面间跳转过渡动画
    postList: true, // 启用 博客文章列表过渡动画
    appearance: 'fade', // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: '/ethpanda.png',
        name: 'Web3 实习手册',
        description: '',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
      // bulletin: {
      //   layout: 'top-right',
      //   contentType: 'markdown',
      //   title: '',
      //   content: '',
      // },
    },
    '/zh-tw/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: '/ethpanda.png',
        name: 'Web3 實習手冊',
        description: '',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhTWNavbar,
      // 使用獨立的 zhTWNotes，明確指定 dir 和 link 為 /zh-tw/
      notes: zhTWNotes,
    },
    '/en/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: '/ethpanda.png',
        name: 'Web3 Internship Handbook',
        description:
          'English version coming soon. Currently perfecting Chinese content.',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
      // bulletin: {
      //   layout: 'top-right',
      //   contentType: 'markdown',
      //   title: '',
      //   content: '',
      // },
    },
  },
});
