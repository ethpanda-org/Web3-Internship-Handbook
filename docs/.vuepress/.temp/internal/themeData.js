export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"内容大纲\",\"children\":[{\"text\":\"第一部分：入门导读\",\"link\":\"/intro\"},{\"text\":\"第二部分: Web3 行业知识\",\"link\":\"/industry\"},{\"text\":\"第三部分：行业前辈访谈录\",\"link\":\"/interviews\"},{\"text\":\"第四部分：面试准备与岗位推荐\",\"link\":\"/interview-prep\"},{\"text\":\"第五部分：附录\",\"link\":\"/appendix\"},{\"text\":\"致谢名单\",\"link\":\"/thanks\"}]}],\"sidebar\":[\"/\",\"/intro\",\"/industry\",\"/interviews\",\"/interview-prep\",\"/appendix\",\"/thanks\"],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
