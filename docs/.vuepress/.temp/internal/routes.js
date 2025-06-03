export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Web3 实习手册"} }],
  ["/appendix.html", { loader: () => import(/* webpackChunkName: "appendix.html" */"/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/appendix.html.js"), meta: {"title":"第五部分：附录"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/industry.html", { loader: () => import(/* webpackChunkName: "industry.html" */"/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/industry.html.js"), meta: {"title":"第二部分：Web3 行业知识"} }],
  ["/interview-prep.html", { loader: () => import(/* webpackChunkName: "interview-prep.html" */"/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/interview-prep.html.js"), meta: {"title":"第四部分：面试准备与行业岗位推荐"} }],
  ["/interviews.html", { loader: () => import(/* webpackChunkName: "interviews.html" */"/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/interviews.html.js"), meta: {"title":"第三部分：行业前辈访谈录"} }],
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/intro.html.js"), meta: {"title":"第一部分：入门导读"} }],
  ["/thanks.html", { loader: () => import(/* webpackChunkName: "thanks.html" */"/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/thanks.html.js"), meta: {"title":"致谢名单"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/%E7%A4%BE%E5%8C%BA%E8%BF%90%E8%90%A5%E5%AE%9E%E4%B9%A0%E5%B2%97%E4%BD%8D%E7%9F%A5%E8%AF%86%E6%A8%A1%E5%9D%97%20206bbd63be878082bd23eb6e33e8a934.html", { loader: () => import(/* webpackChunkName: "社区运营实习岗位知识模块 206bbd63be878082bd23eb6e33e8a934.html" */"/Users/apple/Desktop/ETHPanda-intern/vuepress-starter/docs/.vuepress/.temp/pages/社区运营实习岗位知识模块 206bbd63be878082bd23eb6e33e8a934.html.js"), meta: {"title":"社区运营实习岗位知识模块"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
