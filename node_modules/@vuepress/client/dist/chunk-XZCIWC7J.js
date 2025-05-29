import {
  __export
} from "./chunk-MLKGABMK.js";

// src/devtools/constants.ts
var constants_exports = {};
__export(constants_exports, {
  COMPONENT_STATE_TYPE: () => COMPONENT_STATE_TYPE,
  INSPECTOR_ID: () => INSPECTOR_ID,
  INSPECTOR_LABEL: () => INSPECTOR_LABEL,
  INSPECTOR_NODES: () => INSPECTOR_NODES,
  INSPECTOR_STATE_SECTION_NAME: () => INSPECTOR_STATE_SECTION_NAME,
  PLUGIN_ID: () => PLUGIN_ID,
  PLUGIN_LABEL: () => PLUGIN_LABEL
});
var PLUGIN_ID = "org.vuejs.vuepress";
var PLUGIN_LABEL = "VuePress";
var COMPONENT_STATE_TYPE = PLUGIN_LABEL;
var INSPECTOR_ID = PLUGIN_ID;
var INSPECTOR_LABEL = PLUGIN_LABEL;
var INSPECTOR_NODE_INTERNAL = {
  id: "INTERNAL",
  label: "Internal",
  keys: ["layouts", "routes", "redirects"]
};
var INSPECTOR_NODE_SITE = {
  id: "SITE",
  label: "Site",
  keys: ["siteData", "siteLocaleData"]
};
var INSPECTOR_NODE_ROUTE = {
  id: "ROUTE",
  label: "Route",
  keys: ["routePath", "routeLocale"]
};
var INSPECTOR_NODE_PAGE = {
  id: "PAGE",
  label: "Page",
  keys: [
    "pageData",
    "pageFrontmatter",
    "pageLang",
    "pageHead",
    "pageHeadTitle",
    "pageLayout",
    "pageComponent"
  ]
};
var INSPECTOR_NODES = {
  [INSPECTOR_NODE_INTERNAL.id]: INSPECTOR_NODE_INTERNAL,
  [INSPECTOR_NODE_SITE.id]: INSPECTOR_NODE_SITE,
  [INSPECTOR_NODE_ROUTE.id]: INSPECTOR_NODE_ROUTE,
  [INSPECTOR_NODE_PAGE.id]: INSPECTOR_NODE_PAGE
};
var INSPECTOR_STATE_SECTION_NAME = "State";

export {
  PLUGIN_ID,
  PLUGIN_LABEL,
  COMPONENT_STATE_TYPE,
  INSPECTOR_ID,
  INSPECTOR_LABEL,
  INSPECTOR_NODES,
  INSPECTOR_STATE_SECTION_NAME,
  constants_exports
};
