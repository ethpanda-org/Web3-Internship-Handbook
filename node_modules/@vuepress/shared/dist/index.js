// src/utils/links/isLinkWithProtocol.ts
var isLinkWithProtocol = (link) => /^[a-z][a-z0-9+.-]*:/.test(link) || link.startsWith("//");

// src/utils/links/isLinkExternal.ts
var markdownLinkRegexp = /.md((\?|#).*)?$/;
var isLinkExternal = (link, base = "/") => isLinkWithProtocol(link) || // absolute link that does not start with `base` and does not end with `.md`
link.startsWith("/") && !link.startsWith(base) && !markdownLinkRegexp.test(link);

// src/utils/links/isLinkHttp.ts
var isLinkHttp = (link) => /^(https?:)?\/\//.test(link);

// src/utils/routes/inferRoutePath.ts
var inferRoutePath = (rawPath) => {
  if (!rawPath || rawPath.endsWith("/")) return rawPath;
  let routePath = rawPath.replace(/(^|\/)README.md$/i, "$1index.html");
  if (routePath.endsWith(".md")) {
    routePath = `${routePath.substring(0, routePath.length - 3)}.html`;
  } else if (!routePath.endsWith(".html")) {
    routePath = `${routePath}.html`;
  }
  if (routePath.endsWith("/index.html")) {
    routePath = routePath.substring(0, routePath.length - 10);
  }
  return routePath;
};

// src/utils/routes/normalizeRoutePath.ts
var FAKE_HOST = "http://.";
var normalizeRoutePath = (pathname, current) => {
  if (!pathname.startsWith("/") && current) {
    const loc = current.slice(0, current.lastIndexOf("/"));
    return inferRoutePath(new URL(`${loc}/${pathname}`, FAKE_HOST).pathname);
  }
  return inferRoutePath(pathname);
};

// src/utils/routes/resolveLocalePath.ts
var resolveLocalePath = (locales, routePath) => {
  const localePaths = Object.keys(locales).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};

// src/utils/routes/resolveRoutePathFromUrl.ts
var resolveRoutePathFromUrl = (url, base = "/") => {
  const pathname = url.replace(/^(?:https?:)?\/\/[^/]*/, "");
  return pathname.startsWith(base) ? `/${pathname.slice(base.length)}` : pathname;
};

// src/utils/routes/splitPath.ts
var SPLIT_CHAR_REGEXP = /(#|\?)/;
var splitPath = (path) => {
  const [pathname, ...hashAndQueries] = path.split(SPLIT_CHAR_REGEXP);
  return {
    pathname,
    hashAndQueries: hashAndQueries.join("")
  };
};

// src/utils/resolveHeadIdentifier.ts
var TAGS_ALLOWED = ["link", "meta", "script", "style", "noscript", "template"];
var TAGS_UNIQUE = ["title", "base"];
var resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (TAGS_UNIQUE.includes(tag)) {
    return tag;
  }
  if (!TAGS_ALLOWED.includes(tag)) {
    return null;
  }
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([
    tag,
    Object.entries(attrs).map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? [key, ""] : null;
      }
      return [key, value];
    }).filter((item) => item != null).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)),
    content
  ]);
};

// src/utils/dedupeHead.ts
var dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (identifier && !identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};

// src/utils/ensureLeadingSlash.ts
var ensureLeadingSlash = (str) => str.startsWith("/") ? str : `/${str}`;

// src/utils/ensureEndingSlash.ts
var ensureEndingSlash = (str) => str.endsWith("/") || str.endsWith(".html") ? str : `${str}/`;

// src/utils/formatDateString.ts
var formatDateString = (str, defaultDateString = "") => {
  const dateMatch = str.match(/\b(\d{4})-(\d{1,2})-(\d{1,2})\b/);
  if (dateMatch === null) {
    return defaultDateString;
  }
  const [, yearStr, monthStr, dayStr] = dateMatch;
  return [yearStr, monthStr.padStart(2, "0"), dayStr.padStart(2, "0")].join("-");
};

// src/utils/omit.ts
var omit = (obj, ...keys) => {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
};

// src/utils/removeEndingSlash.ts
var removeEndingSlash = (str) => str.endsWith("/") ? str.slice(0, -1) : str;

// src/utils/removeLeadingSlash.ts
var removeLeadingSlash = (str) => str.startsWith("/") ? str.slice(1) : str;

// src/utils/typeGuards.ts
var isFunction = (val) => typeof val === "function";
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var isString = (val) => typeof val === "string";
export {
  dedupeHead,
  ensureEndingSlash,
  ensureLeadingSlash,
  formatDateString,
  inferRoutePath,
  isFunction,
  isLinkExternal,
  isLinkHttp,
  isLinkWithProtocol,
  isPlainObject,
  isString,
  normalizeRoutePath,
  omit,
  removeEndingSlash,
  removeLeadingSlash,
  resolveHeadIdentifier,
  resolveLocalePath,
  resolveRoutePathFromUrl,
  splitPath
};
