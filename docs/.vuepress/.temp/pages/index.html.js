import comp from "/Users/apple/Desktop/ETHPanda-intern/internbook/Web3-Internship-Handbook/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"Web3 实习手册\",\"text\":\"本手册旨在为 Web3 行业实习生提供系统的入门与进阶指导，涵盖区块链基础、以太坊生态、行业岗位、实战技能、面试准备等内容，帮助你高效融入 Web3 世界。\",\"actions\":[{\"theme\":\"brand\",\"text\":\"开始阅读\",\"link\":\"./web3-handbook/README.md\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://github.com/ethpanda-org/Web3-Internship-Handbook\"}]}}]},\"readingTime\":{\"minutes\":0.35,\"words\":106},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[],\"categoryList\":[]}")
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
