import comp from "/Users/apple/Desktop/ETHPanda-intern/internbook/my-project/docs/.vuepress/.temp/pages/thanks.html.vue"
const data = JSON.parse("{\"path\":\"/thanks.html\",\"title\":\"致谢名单\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"致谢名单\"},\"readingTime\":{\"minutes\":0.19,\"words\":58},\"git\":{},\"filePathRelative\":\"thanks.md\",\"headers\":[],\"categoryList\":[]}")
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
