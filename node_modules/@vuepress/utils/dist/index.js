// src/index.ts
import debug from "debug";
import fs from "fs-extra";
import { globby } from "globby";
import hash from "hash-sum";
import ora2 from "ora";
import colors2 from "picocolors";
import path3 from "upath";

// src/console/formatMs.ts
var formatMs = (ms) => {
  if (ms < 1e3) return `${ms}ms`;
  return `${(ms / 1e3).toFixed(2)}s`;
};

// src/console/logger.ts
import colors from "picocolors";
var info = (...args) => {
  console.log(colors.cyan("info"), ...args);
};
var tip = (...args) => {
  console.log(colors.blue("tip"), ...args);
};
var success = (...args) => {
  console.log(colors.green("success"), ...args);
};
var warn = (...args) => {
  console.warn(colors.yellow("warning"), ...args);
};
var error = (...args) => {
  console.error(colors.red("error"), ...args);
};
var createError = (message) => {
  error(message);
  return new Error(message);
};
var logger = {
  info,
  tip,
  success,
  warn,
  error,
  createError
};

// src/console/withSpinner.ts
import process from "node:process";
import ora from "ora";
var withSpinner = (msg) => async (target) => {
  if (process.env.DEBUG) {
    return target();
  }
  const start = Date.now();
  const spinner = ora();
  try {
    spinner.start(msg);
    const result = await target(spinner);
    spinner.succeed(`${msg} - done in ${formatMs(Date.now() - start)}`);
    return result;
  } catch (e) {
    spinner.fail(`${msg} - failed in ${formatMs(Date.now() - start)}`);
    throw e;
  }
};

// src/module/getDirname.ts
import { fileURLToPath } from "node:url";
import path from "upath";
var getDirname = (importMetaUrl) => path.dirname(fileURLToPath(importMetaUrl));

// src/module/importFile.ts
import { pathToFileURL } from "node:url";
var importFile = async (filePath) => import(pathToFileURL(filePath).toString());
var importFileDefault = async (filePath) => importFile(filePath).then((m) => m.default);

// src/module/isChildPath.ts
import path2 from "upath";
var isChildPath = (child, parent) => {
  const childPath = path2.normalize(child);
  const parentPath = path2.normalize(parent);
  if (!path2.win32.isAbsolute(childPath) || !path2.win32.isAbsolute(parentPath)) {
    return false;
  }
  const relativePath = path2.relative(parentPath, childPath);
  return relativePath === "" || !relativePath.startsWith("..");
};

// src/module/sanitizeFileName.ts
var INVALID_CHAR_REGEX = /[\u0000-\u001F"#$%&*+,:;<=>?[\]^`{|}\u007F]/g;
var DRIVE_LETTER_REGEX = /^[a-z]:/i;
var sanitizeFileName = (name) => {
  const driveLetter = DRIVE_LETTER_REGEX.exec(name)?.[0] || "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/^_+/, "");
};

// src/module/transformPathToFileName.ts
var transformPathToFileName = (rawPath) => sanitizeFileName(rawPath.replace(/\//g, "_"));

// src/ssr/renderHeadAttrs.ts
var renderHeadAttrs = (attrs) => Object.entries(attrs).filter((item) => item[1] !== false).map(
  ([key, value]) => value === true ? ` ${key}` : ` ${key}="${attrs[key]}"`
).join("");

// src/ssr/renderHead.ts
var renderHead = ([
  tag,
  attrs,
  innerHTML = ""
]) => {
  const openTag = `<${tag}${renderHeadAttrs(attrs)}>`;
  if (tag === "link" || tag === "meta" || tag === "base") {
    return openTag;
  }
  return `${openTag}${innerHTML}</${tag}>`;
};

// src/ssr/templateRenderer.ts
var TEMPLATE_RENDERER_OUTLETS = {
  CONTENT: "<!--vuepress-ssr-content-->",
  HEAD: "<!--vuepress-ssr-head-->",
  LANG: "{{ lang }}",
  PREFETCH: "<!--vuepress-ssr-prefetch-->",
  PRELOAD: "<!--vuepress-ssr-preload-->",
  SCRIPTS: "<!--vuepress-ssr-scripts-->",
  STYLES: "<!--vuepress-ssr-styles-->",
  VERSION: "{{ version }}"
};
var templateRenderer = (template, { content, head, lang, prefetch, preload, scripts, styles, version }) => template.replace(TEMPLATE_RENDERER_OUTLETS.CONTENT, () => content).replace(TEMPLATE_RENDERER_OUTLETS.HEAD, head).replace(TEMPLATE_RENDERER_OUTLETS.LANG, lang).replace(TEMPLATE_RENDERER_OUTLETS.PREFETCH, prefetch).replace(TEMPLATE_RENDERER_OUTLETS.PRELOAD, preload).replace(TEMPLATE_RENDERER_OUTLETS.SCRIPTS, scripts).replace(TEMPLATE_RENDERER_OUTLETS.STYLES, styles).replace(TEMPLATE_RENDERER_OUTLETS.VERSION, version);
export {
  TEMPLATE_RENDERER_OUTLETS,
  colors2 as colors,
  createError,
  debug,
  error,
  formatMs,
  fs,
  getDirname,
  globby,
  hash,
  importFile,
  importFileDefault,
  info,
  isChildPath,
  logger,
  ora2 as ora,
  path3 as path,
  renderHead,
  renderHeadAttrs,
  sanitizeFileName,
  success,
  templateRenderer,
  tip,
  transformPathToFileName,
  warn,
  withSpinner
};
