import comp from "/Users/apple/Desktop/ETHPanda-intern/internbook/my-project/docs/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"第一部分：入门导读\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"第一部分：入门导读\"},\"readingTime\":{\"minutes\":31.38,\"words\":9413},\"git\":{},\"filePathRelative\":\"intro.md\",\"headers\":[],\"categoryList\":[]}")
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
