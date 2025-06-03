// src/markdown.ts
import { slugify as defaultSlugify } from "@mdit-vue/shared";
import { logger as logger2 } from "@vuepress/utils";
import MarkdownIt from "markdown-it";

// src/plugins.ts
import {
  componentPlugin
} from "@mdit-vue/plugin-component";
import {
  frontmatterPlugin
} from "@mdit-vue/plugin-frontmatter";
import {
  headersPlugin
} from "@mdit-vue/plugin-headers";
import { sfcPlugin } from "@mdit-vue/plugin-sfc";
import { titlePlugin } from "@mdit-vue/plugin-title";
import { tocPlugin } from "@mdit-vue/plugin-toc";

// src/plugins/anchorPlugin.ts
import anchorPlugin from "markdown-it-anchor";

// src/plugins/assetsPlugin/resolveLink.ts
import { path } from "@vuepress/utils";
import { decode } from "mdurl";
var resolveLink = (link, {
  env,
  absolutePathPrependBase = false,
  relativePathPrefix,
  strict = false
}) => {
  if (link.startsWith("data:")) return link;
  let resolvedLink = decode(link);
  const isRelativePath = strict ? (
    // in strict mode, only link that starts with `./` or `../` is considered as relative path
    /^\.{1,2}\//.test(link)
  ) : (
    // in non-strict mode, link that does not start with `/` and does not have protocol is considered as relative path
    !link.startsWith("/") && !/[A-z]+:\/\//.test(link)
  );
  if (isRelativePath && env.filePathRelative) {
    resolvedLink = `${relativePathPrefix}/${path.join(
      path.dirname(env.filePathRelative),
      resolvedLink
    )}`;
  }
  if (absolutePathPrependBase && env.base && link.startsWith("/")) {
    resolvedLink = path.join(env.base, resolvedLink);
  }
  return resolvedLink;
};

// src/plugins/assetsPlugin/assetsPlugin.ts
var assetsPlugin = (md, {
  absolutePathPrependBase = false,
  relativePathPrefix = "@source"
} = {}) => {
  const rawImageRule = md.renderer.rules.image;
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const link = token.attrGet("src");
    if (link) {
      token.attrSet(
        "src",
        resolveLink(link, { env, absolutePathPrependBase, relativePathPrefix })
      );
    }
    return rawImageRule(tokens, idx, options, env, self);
  };
  const createHtmlRule = (rawHtmlRule) => (tokens, idx, options, env, self) => {
    tokens[idx].content = tokens[idx].content.replace(
      /(<img\b.*?src=)(['"])(.*?)\2/gs,
      (_, prefix, quote, src) => `${prefix}${quote}${resolveLink(src.trim(), {
        env,
        absolutePathPrependBase,
        relativePathPrefix,
        strict: true
      })}${quote}`
    ).replace(
      /(<img\b.*?srcset=)(['"])(.*?)\2/gs,
      (_, prefix, quote, srcset) => `${prefix}${quote}${srcset.split(",").map(
        (item) => item.trim().replace(
          /^([^ ]*?)([ \n].*)?$/,
          (__, url, descriptor = "") => `${resolveLink(url.trim(), {
            env,
            absolutePathPrependBase,
            relativePathPrefix,
            strict: true
          })}${descriptor.replace(/[ \n]+/g, " ").trimEnd()}`
        )
      ).join(", ")}${quote}`
    );
    return rawHtmlRule(tokens, idx, options, env, self);
  };
  const rawHtmlBlockRule = md.renderer.rules.html_block;
  const rawHtmlInlineRule = md.renderer.rules.html_inline;
  md.renderer.rules.html_block = createHtmlRule(rawHtmlBlockRule);
  md.renderer.rules.html_inline = createHtmlRule(rawHtmlInlineRule);
};

// src/plugins/emojiPlugin.ts
import { full as emojiPlugin } from "markdown-it-emoji";

// src/plugins/importCodePlugin/createImportCodeBlockRule.ts
import { path as path2 } from "@vuepress/utils";
var MIN_LENGTH = 9;
var START_CODES = [64, 91, 99, 111, 100, 101];
var SYNTAX_RE = /^@\[code(?:{(?:(?:(?<lineStart>\d+)?-(?<lineEnd>\d+)?)|(?<lineSingle>\d+))})?(?: (?<info>[^\]]+))?\]\((?<importPath>[^)]*)\)/;
var parseLineNumber = (line) => line ? Number.parseInt(line, 10) : void 0;
var createImportCodeBlockRule = ({ handleImportPath = (str) => str }) => (state, startLine, endLine, silent) => {
  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }
  const pos = state.bMarks[startLine] + state.tShift[startLine];
  const max = state.eMarks[startLine];
  if (pos + MIN_LENGTH > max) return false;
  for (let i = 0; i < START_CODES.length; i += 1) {
    if (state.src.charCodeAt(pos + i) !== START_CODES[i]) {
      return false;
    }
  }
  const match = state.src.slice(pos, max).match(SYNTAX_RE);
  if (!match?.groups) return false;
  if (silent) return true;
  const { info, importPath } = match.groups;
  const lineSingle = parseLineNumber(match.groups.lineSingle);
  const lineStart = lineSingle ?? parseLineNumber(match.groups.lineStart) ?? 0;
  const lineEnd = lineSingle ?? parseLineNumber(match.groups.lineEnd);
  const meta = {
    importPath: handleImportPath(importPath),
    lineStart,
    lineEnd
  };
  const token = state.push("import_code", "code", 0);
  token.info = info ?? path2.extname(meta.importPath).slice(1);
  token.markup = "```";
  token.map = [startLine, startLine + 1];
  token.meta = meta;
  state.line = startLine + 1;
  return true;
};

// src/plugins/importCodePlugin/resolveImportCode.ts
import { colors, fs, logger, path as path3 } from "@vuepress/utils";
var resolveImportCode = ({ importPath, lineStart, lineEnd }, { filePath }) => {
  let importFilePath = importPath;
  if (!path3.isAbsolute(importPath)) {
    if (!filePath) {
      logger.error(
        `Import file ${colors.magenta(importPath)} can not be resolved`
      );
      return {
        importFilePath: null,
        importCode: "Error when resolving path"
      };
    }
    importFilePath = path3.resolve(filePath, "..", importPath);
  }
  if (!fs.existsSync(importFilePath)) {
    logger.error(`Import file ${colors.magenta(importPath)} not found`);
    return {
      importFilePath,
      importCode: "File not found"
    };
  }
  const fileContent = fs.readFileSync(importFilePath).toString();
  return {
    importFilePath,
    importCode: fileContent.split("\n").slice(lineStart ? lineStart - 1 : lineStart, lineEnd).join("\n").replace(/\n?$/, "\n")
  };
};

// src/plugins/importCodePlugin/importCodePlugin.ts
var importCodePlugin = (md, options = {}) => {
  md.block.ruler.before(
    "fence",
    "import_code",
    createImportCodeBlockRule(options),
    {
      alt: ["paragraph", "reference", "blockquote", "list"]
    }
  );
  md.renderer.rules.import_code = (tokens, idx, opts, env, slf) => {
    const token = tokens[idx];
    const { importFilePath, importCode } = resolveImportCode(
      token.meta,
      env
    );
    token.content = importCode;
    if (importFilePath) {
      ;
      (env.importedFiles ??= []).push(importFilePath);
    }
    return md.renderer.rules.fence(tokens, idx, opts, env, slf);
  };
};

// src/plugins/linksPlugin/linksPlugin.ts
import { inferRoutePath, isLinkExternal } from "@vuepress/shared";

// src/plugins/linksPlugin/resolvePaths.ts
import { removeLeadingSlash } from "@vuepress/shared";
import { path as path4 } from "@vuepress/utils";
var resolvePaths = (rawPath, base, filePathRelative) => {
  let absolutePath;
  let relativePath;
  if (rawPath.startsWith("/")) {
    if (rawPath.endsWith(".md")) {
      absolutePath = path4.join(base, rawPath);
      relativePath = removeLeadingSlash(rawPath);
    } else {
      absolutePath = rawPath;
      relativePath = path4.relative(base, absolutePath);
    }
  } else if (filePathRelative) {
    relativePath = path4.join(
      // file path may contain non-ASCII characters
      path4.dirname(encodeURI(filePathRelative)),
      rawPath
    );
    absolutePath = path4.join(base, relativePath);
  } else {
    relativePath = rawPath.replace(/^(?:\.\/)?(.*)$/, "$1");
    absolutePath = null;
  }
  return {
    absolutePath,
    relativePath
  };
};

// src/plugins/linksPlugin/linksPlugin.ts
var linksPlugin = (md, options = {}) => {
  const internalTag = options.internalTag || "RouteLink";
  const isExternal = options.isExternal ?? ((href, env) => isLinkExternal(href, env.base));
  const externalAttrs = {
    target: "_blank",
    rel: "noopener noreferrer",
    ...options.externalAttrs
  };
  let hasOpenInternalLink = false;
  const handleLinkOpen = (tokens, idx, env) => {
    const token = tokens[idx];
    const hrefIndex = token.attrIndex("href");
    if (hrefIndex < 0) {
      return;
    }
    const hrefAttr = token.attrs[hrefIndex];
    const hrefLink = hrefAttr[1];
    const { base = "/", filePathRelative = null } = env;
    if (isExternal(hrefLink, env)) {
      Object.entries(externalAttrs).forEach(([key, val]) => {
        token.attrSet(key, val);
      });
      return;
    }
    const internalLinkMatch = hrefLink.match(
      /^([^#?]*?(?:\/|\.md|\.html))([#?].*)?$/
    );
    if (!internalLinkMatch) {
      return;
    }
    const rawPath = internalLinkMatch[1];
    const rawHashAndQueries = (internalLinkMatch[2] || "").replace(
      /^#(\d)/,
      "#_$1"
    );
    const { relativePath, absolutePath } = resolvePaths(
      rawPath,
      base,
      filePathRelative
    );
    if (["RouterLink", "RouteLink"].includes(internalTag)) {
      token.tag = internalTag;
      hrefAttr[0] = "to";
      const normalizedPath = inferRoutePath(
        absolutePath ? absolutePath.replace(new RegExp(`^${base}`), "/") : relativePath
      );
      hrefAttr[1] = `${normalizedPath}${rawHashAndQueries}`;
      hasOpenInternalLink = true;
    } else {
      const normalizedPath = inferRoutePath(absolutePath ?? relativePath);
      hrefAttr[1] = `${normalizedPath}${rawHashAndQueries}`;
    }
    ;
    (env.links ??= []).push({
      raw: hrefLink,
      relative: relativePath,
      absolute: absolutePath
    });
  };
  md.renderer.rules.link_open = (tokens, idx, opts, env, self) => {
    handleLinkOpen(tokens, idx, env);
    return self.renderToken(tokens, idx, opts);
  };
  md.renderer.rules.link_close = (tokens, idx, opts, _env, self) => {
    if (hasOpenInternalLink) {
      hasOpenInternalLink = false;
      tokens[idx].tag = internalTag;
    }
    return self.renderToken(tokens, idx, opts);
  };
};

// src/plugins/vPrePlugin/resolveVPre.ts
var resolveVPre = (info) => {
  if (/:v-pre\b/.test(info)) {
    return true;
  }
  if (/:no-v-pre\b/.test(info)) {
    return false;
  }
  return null;
};

// src/plugins/vPrePlugin/vPrePlugin.ts
var vPrePlugin = (md, { inline = true, block = true } = {}) => {
  const rawFence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    const info = token.info ? md.utils.unescapeAll(token.info).trim() : "";
    let result = rawFence(...args);
    if (resolveVPre(info) ?? block) {
      result = `<pre v-pre${result.slice("<pre".length)}`;
    }
    return result;
  };
  if (inline) {
    const rawInlineCodeRule = md.renderer.rules.code_inline;
    md.renderer.rules.code_inline = (...args) => {
      const result = rawInlineCodeRule(...args);
      return `<code v-pre${result.slice("<code".length)}`;
    };
  }
};

// src/markdown.ts
var createMarkdown = ({
  anchor,
  assets,
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  code,
  vPre,
  component,
  emoji,
  frontmatter,
  headers,
  title,
  importCode,
  links,
  sfc,
  slugify = defaultSlugify,
  toc,
  ...markdownItOptions
} = {}) => {
  const md = MarkdownIt({
    ...markdownItOptions,
    // should always enable html option
    html: true
  });
  if (anchor !== false) {
    md.use(anchorPlugin, {
      level: [1, 2, 3, 4, 5, 6],
      slugify,
      permalink: anchorPlugin.permalink.headerLink({
        class: "header-anchor",
        // Add a span inside the link so Safari shows headings in reader view.
        safariReaderFix: true
      }),
      ...anchor
    });
  }
  if (assets !== false) {
    md.use(assetsPlugin, assets);
  }
  if (code) {
    logger2.warn(
      `\`markdown.code\` option has been removed, please use '@vuepress/plugin-shiki' or '@vuepress/plugin-prismjs' instead.
 See https://vuepress.vuejs.org/reference/config.html#markdown-code`
    );
  }
  if (component !== false) {
    md.use(componentPlugin);
  }
  if (emoji !== false) {
    md.use(emojiPlugin, emoji);
  }
  if (frontmatter !== false) {
    md.use(frontmatterPlugin, {
      ...frontmatter,
      grayMatterOptions: {
        excerpt: false,
        ...frontmatter?.grayMatterOptions
      }
    });
  }
  if (headers !== false) {
    md.use(headersPlugin, {
      level: [2, 3],
      slugify,
      ...headers
    });
  }
  if (importCode !== false) {
    md.use(importCodePlugin, importCode);
  }
  if (links !== false) {
    md.use(linksPlugin, links);
  }
  if (sfc !== false) {
    md.use(sfcPlugin, sfc);
  }
  if (toc !== false) {
    md.use(tocPlugin, {
      level: [2, 3],
      slugify,
      linkTag: "router-link",
      ...toc
    });
  }
  if (title !== false) {
    md.use(titlePlugin);
  }
  if (vPre !== false) {
    md.use(vPrePlugin, vPre);
  }
  return md;
};
export {
  anchorPlugin,
  assetsPlugin,
  componentPlugin,
  createMarkdown,
  emojiPlugin,
  frontmatterPlugin,
  headersPlugin,
  importCodePlugin,
  linksPlugin,
  sfcPlugin,
  titlePlugin,
  tocPlugin,
  vPrePlugin
};
