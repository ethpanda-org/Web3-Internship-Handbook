import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Web3 实习手册',
  description: '系统化的 Web3 实习生入门与进阶手册',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      '/',
      '/intro',
      '/industry',
      '/interviews',
      '/interview-prep',
      '/appendix',
      '/thanks',
    ],
    sidebar: [
      '/',
      '/intro',
      '/industry',
      '/interviews',
      '/interview-prep',
      '/appendix',
      '/thanks',
    ],
  }),

  bundler: viteBundler(),
})
