import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Web3 实习手册',
  description: '系统化的 Web3 实习生入门与进阶手册',

  theme: defaultTheme({
    logo: '/images/logo.png',

    navbar: [
      { text: '首页', link: '/' },
      {
        text: '内容大纲',
        children: [
          { text: '第一部分：入门导读', link: '/intro' },
          { text: '第二部分: Web3 行业知识', link: '/industry' },
          { text: '第三部分：行业前辈访谈录', link: '/interviews' },
          { text: '第四部分：面试准备与岗位推荐', link: '/interview-prep' },
          { text: '第五部分：附录', link: '/appendix' },
          { text: '致谢名单', link: '/thanks' }
        ]
      },
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
