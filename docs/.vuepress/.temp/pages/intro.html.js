import comp from "/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"第一部分：入门导读\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. 区块链基础概念\",\"slug\":\"_1-区块链基础概念\",\"link\":\"#_1-区块链基础概念\",\"children\":[]},{\"level\":2,\"title\":\"2. 以太坊概览\",\"slug\":\"_2-以太坊概览\",\"link\":\"#_2-以太坊概览\",\"children\":[]},{\"level\":2,\"title\":\"3. 行业知识模块\",\"slug\":\"_3-行业知识模块\",\"link\":\"#_3-行业知识模块\",\"children\":[]},{\"level\":2,\"title\":\"4. 基础工作习惯\",\"slug\":\"_4-基础工作习惯\",\"link\":\"#_4-基础工作习惯\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"intro.md\"}")
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
