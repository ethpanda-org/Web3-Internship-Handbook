import comp from "/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Web3 实习手册\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Web3 实习手册\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"入门导读\",\"link\":\"/intro.html\",\"type\":\"primary\"},{\"text\":\"Web3 行业知识\",\"link\":\"/industry.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"系统化内容\",\"details\":\"覆盖区块链、以太坊、行业岗位、实战技能、面试准备等核心内容。\"},{\"title\":\"实用性强\",\"details\":\"结合真实实习场景，提供工具、案例、经验与面试指导。\"},{\"title\":\"持续迭代\",\"details\":\"社区共建，内容持续完善，欢迎贡献和反馈。\"}],\"footer\":\"MIT Licensed | Copyright © 2024 ETHPanda & Contributors\"},\"headers\":[],\"git\":{\"updatedTime\":1748521278000,\"contributors\":[{\"name\":\"“EchoZheng2333”\",\"username\":\"\",\"email\":\"1137077228@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"7a7cf07e916cc4678263fbc094cb261b3dbfe324\",\"time\":1748521278000,\"email\":\"1137077228@qq.com\",\"author\":\"“EchoZheng2333”\",\"message\":\"feat: upload local vuepress-starter content\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
