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
import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume';

/* =================== locale: zh-CN ======================= */

const handbookNote = defineNoteConfig({
  dir: 'zh',
  link: '/zh',
  sidebar: [
    { text: 'Web3 实习手册', link: 'README.md' },
    {
      text: '入门导读',
      items: [
        { text: '区块链基础概念', link: 'part1/blockchain-basic.md' },
        { text: '以太坊概览', link: 'part1/overview-of-ethereum.md' },
        { text: '行业赛道全览', link: 'part1/industry-knowledge.md' },
        { text: 'Web3 工作方式', link: 'part1/remote-work-guide.md' },
      ],
      collapsed: false,
    },
    {
      text: 'Web3 行业知识',
      items: [
        {
          text: '区块链岗位全景图',
          link: 'part2/position-introduction.md',
        },
        {
          text: '智能合约开发',
          link: 'part2/smart-contract-development.md',
        },
        { text: '社区运营指南', link: 'part2/community-intern.md' },
        {
          text: '合规和网络安全',
          link: 'part2/security.md',
        },
      ],
      collapsed: false,
    },
    {
      text: '行业前辈访谈录',
      items: [
        { text: '前端先锋的链上闯关之路', link: 'part3/Logic.md' },
        { text: 'Web2 到 Web3 的转型之路', link: 'part3/Jason.md' },
        { text: 'Web3 社区增长专家', link: 'part3/Julie.md' },
        { text: '如何成为靠谱的 Web3 实习生', link: 'part3/Bruce.md' },
      ],
      collapsed: false,
    },
    {
      text: '面试准备与行业岗位推荐',
      collapsed: false,
      items: [
        { text: '招聘平台与职位推荐', link: 'part4/job-platform.md' },
        { text: 'Web3 行业简历撰写指导', link: 'part4/write-resume.md' },
        {
          text: '面试准备与典型面试题',
          link: 'part4/interview-preparedness.md',
        },
      ],
    },
    {
      text: '附录',
      collapsed: false,
      items: [{ text: '附录', link: 'part5/part5.md' }],
    },
    { text: '致谢名单', link: 'acknowledgments.md' },
  ],
});

/**
 * 簡體中文 notes 配置
 * dir: '/' 表示相對於 docs/ 目錄
 * handbookNote 內的 dir: 'zh' 會解析為 docs/zh/
 */
export const zhNotes = defineNotesConfig({
  dir: '/',
  link: '/',
  notes: [handbookNote],
});

/**
 * 繁體中文 notes 配置（獨立配置）
 * 關鍵修正：明確指定 dir 和 link 為 zh-tw
 * 這樣 /zh-tw/ locale 就有自己獨立的上下文
 */
export const zhTWNotes = defineNotesConfig({
  dir: 'zh-tw',
  link: '/zh-tw/',
  notes: [
    defineNoteConfig({
      dir: '',  // 相對於 zhTWNotes 的 dir (即 docs/zh-tw/)
      link: '', // 相對於 zhTWNotes 的 link (即 /zh-tw/)
      sidebar: [
        { text: 'Web3 實習手冊', link: 'README.md' },
        {
          text: '入門導讀',
          items: [
            { text: '區塊鏈基礎概念', link: 'part1/blockchain-basic.md' },
            { text: '以太坊概覽', link: 'part1/overview-of-ethereum.md' },
            { text: '行業賽道全覽', link: 'part1/industry-knowledge.md' },
            { text: 'Web3 工作方式', link: 'part1/remote-work-guide.md' },
          ],
          collapsed: false,
        },
        {
          text: 'Web3 行業知識',
          items: [
            { text: '區塊鏈崗位全景圖', link: 'part2/position-introduction.md' },
            { text: '智能合約開發', link: 'part2/smart-contract-development.md' },
            { text: '社群營運指南', link: 'part2/community-intern.md' },
            { text: '合規和網路安全', link: 'part2/security.md' },
          ],
          collapsed: false,
        },
        {
          text: '行業前輩訪談錄',
          items: [
            { text: '前端先鋒的鏈上闯關之路', link: 'part3/Logic.md' },
            { text: 'Web2 到 Web3 的轉型之路', link: 'part3/Jason.md' },
            { text: 'Web3 社群增長專家', link: 'part3/Julie.md' },
            { text: '如何成為靠譜的 Web3 實習生', link: 'part3/Bruce.md' },
          ],
          collapsed: false,
        },
        {
          text: '面試準備與行業崗位推薦',
          collapsed: false,
          items: [
            { text: '招聘平台與職位推薦', link: 'part4/job-platform.md' },
            { text: 'Web3 行業履歷撰寫指導', link: 'part4/write-resume.md' },
            { text: '面試準備與典型面試題', link: 'part4/interview-preparedness.md' },
          ],
        },
        {
          text: '附錄',
          collapsed: false,
          items: [{ text: '附錄', link: 'part5/part5.md' }],
        },
        { text: '致謝名單', link: 'acknowledgments.md' },
      ],
    }),
  ],
});

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
});

/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 * （enDemoNote 为参考示例，如果不需要它，请删除）
 */
export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
});
