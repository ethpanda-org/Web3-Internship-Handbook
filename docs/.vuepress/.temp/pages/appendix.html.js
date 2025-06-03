import comp from "/Users/apple/Desktop/ETHPanda-intern/internbook/my-project/docs/.vuepress/.temp/pages/appendix.html.vue"
const data = JSON.parse("{\"path\":\"/appendix.html\",\"title\":\"第五部分：附录\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"第五部分：附录\"},\"readingTime\":{\"minutes\":0.67,\"words\":202},\"git\":{},\"filePathRelative\":\"appendix.md\",\"headers\":[],\"categoryList\":[]}")
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
