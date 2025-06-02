import comp from "/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/thanks.html.vue"
const data = JSON.parse("{\"path\":\"/thanks.html\",\"title\":\"致谢名单\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1748521778000,\"contributors\":[{\"name\":\"“EchoZheng2333”\",\"username\":\"\",\"email\":\"1137077228@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"280c2301758b0d9edd4b19dfda319d75354886f4\",\"time\":1748521778000,\"email\":\"1137077228@qq.com\",\"author\":\"“EchoZheng2333”\",\"message\":\"feat: 按内容大纲生成章节骨架及导航\"}]},\"filePathRelative\":\"thanks.md\"}")
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
