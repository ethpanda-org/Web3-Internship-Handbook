/**
 * @see https://theme-plume.vuejs.press/guide/document/ 查看文档了解配置详情。
 *
 * Notes 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Notes，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Notes，然后在与 Note 相关的 Markdown 文件中，自动生成 permalink。
 *
 * 如果你发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 note 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `note.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineNoteConfig` 是用于定义单个 note 配置的帮助函数
 * - `defineNotesConfig` 是用于定义 notes 集合的帮助函数
 *
 * 通过 `defineNoteConfig` 定义的 note 配置，应该填入 `defineNotesConfig` 的 notes 数组中
 */
import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhDemoNote = defineNoteConfig({
  dir: 'demo',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/demo',
  // 手动配置侧边栏结构
  sidebar: ['', 'foo', 'bar'],
  // 根据文件结构自动生成侧边栏
  // sidebar: 'auto',
})

/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 * （zhDemoNote 为参考示例，如果不需要它，请删除）
 */
// export const zhNotes = defineNotesConfig({
//   dir: 'notes',
//   link: '/',
//   notes: [zhDemoNote],
// })

const handbookNote = defineNoteConfig({
  dir: 'web3-handbook',
  link: '/web3-handbook',
  sidebar: [
    { text: '内容大纲', link: 'README.md' },
    {
      text: '入门导读',
      items: [
        { text: '区块链基础概念', link: 'part1/blockchain-basic.md' },
        { text: '以太坊概览', link: 'part1/overview-of-ethereum.md' },
        { text: '行业知识', link: 'part1/industry-knowledge.md' },
        { text: 'Web3 基础工作习惯', link: 'part1/Web3-working-habits.md' },
      ],
      collapsed: true
    },
    {
      text: 'Web3 行业知识',
      items: [
        { text: '区块链岗位类型与职能简介', link: 'part2/position-introduction.md' },
        { text: '智能合约实习岗位知识模块', link: 'part2/tec-intern.md' },
        { text: '社区运营实习岗位知识模块', link: 'part2/community-intern.md' },
        { text: '合规和网络安全', link: 'part2/security.md' },
      ],
      collapsed: true,
    },
    {
      text: '行业前辈访谈录',
      items: [
        { text: 'Logic：Bybit 前端先锋的链上闯关之路', link: 'part3/Jason.md' },
        { text: 'Jason：Web2 资深工程师的 Web3 转型之路', link: 'part3/Julie.md' },
        { text: 'Julie：从 0 到 1 的00后 Web3 社区增长专家', link: 'part3/Logic.md' },
      ],
      collapsed: true,
    },
    {
      text: '面试准备与行业岗位推荐', collapsed: true,
      items: [
        { text: '招聘平台与职位推荐', link: 'part4/job-platform.md' },
        { text: 'Web3 行业简历撰写指导', link: 'part4/write-resume.md' },
      ],
    },
    { text: '附录', link: 'part5/part5.md',collapsed: true,
      items: [
        { text: 'Twitter Space 执行模版', link: 'part5/twitterSpace.md' },
        { text: '线上活动执行模板', link: 'part5/online.md' },
        { text: '线下活动执行模板', link: 'part5/offline.md' },
      ],
    },
    { text: '致谢名单', link: '致谢名单.md'},
    // {text: '获取更多', link: 'get-started.md', collapsed: true}
  ],

})

export const zhNotes = defineNotesConfig({
  dir: '/',
  link: '/',
  notes: [
    handbookNote
  ],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/demo',
  // 手动配置侧边栏结构
  sidebar: ['', 'foo', 'bar'],
  // 根据文件结构自动生成侧边栏
  // sidebar: 'auto',
})

/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 * （enDemoNote 为参考示例，如果不需要它，请删除）
 */
export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})
