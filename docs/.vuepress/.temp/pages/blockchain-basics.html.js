import comp from "/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/blockchain-basics.html.vue"
const data = JSON.parse("{\"path\":\"/blockchain-basics.html\",\"title\":\"区块链基础概念\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"区块链是什么？\",\"slug\":\"区块链是什么\",\"link\":\"#区块链是什么\",\"children\":[]},{\"level\":2,\"title\":\"Web3 是什么？\",\"slug\":\"web3-是什么\",\"link\":\"#web3-是什么\",\"children\":[]},{\"level\":2,\"title\":\"去中心化的优势与挑战\",\"slug\":\"去中心化的优势与挑战\",\"link\":\"#去中心化的优势与挑战\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blockchain-basics.md\"}")
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
