// src/build/createVueServerApp.ts
import { importFile, importFileDefault } from "@vuepress/utils";
var createVueServerApp = async (serverAppPath) => {
  const importer = serverAppPath.endsWith(".cjs") ? importFileDefault : importFile;
  const { createVueApp } = await importer(serverAppPath);
  const { app, router } = await createVueApp();
  return { vueApp: app, vueRouter: router };
};

// src/build/getSsrTemplate.ts
import { fs } from "@vuepress/utils";
var getSsrTemplate = async (app) => fs.readFile(app.options.templateBuild, { encoding: "utf8" });

// src/build/renderPageToString.ts
import { ssrContextKey } from "vue";
var renderPageToString = async ({
  page,
  vueApp,
  vueRouter,
  ssrContextInit
}) => {
  await vueRouter.push(page.path);
  await vueRouter.isReady();
  delete vueApp._context.provides[ssrContextKey];
  const ssrContext = {
    lang: "en",
    head: [],
    ...ssrContextInit
  };
  const { renderToString } = await import("vue/server-renderer");
  const ssrString = await renderToString(vueApp, ssrContext);
  return {
    ssrContext,
    ssrString
  };
};
export {
  createVueServerApp,
  getSsrTemplate,
  renderPageToString
};
