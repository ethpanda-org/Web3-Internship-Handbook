export const siteData = JSON.parse("{\"base\":\"/Web3-Internship-Handbook/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"href\":\"/640.png\"}]],\"locales\":{\"/\":{\"title\":\"Internship Handbook\",\"lang\":\"zh-CN\",\"description\":\"\"},\"/en/\":{\"title\":\"Internship Handbook\",\"lang\":\"en-US\",\"description\":\"\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
