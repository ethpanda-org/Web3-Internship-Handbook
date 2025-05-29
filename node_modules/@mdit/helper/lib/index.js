const l=e=>{const n=e.split(`
`),p=n.reduce((r,c)=>{for(let t=0;t<c.length;t++)if(c[t]!==" "&&c[t]!=="	")return Math.min(t,r);return r},1/0);return p<1/0?n.map(r=>r.slice(p)).join(`
`):e},a=e=>e.replace(/&/gu,"&amp;").replace(/</gu,"&lt;").replace(/>/gu,"&gt;").replace(/"/gu,"&quot;").replace(/'/gu,"&#39;"),g=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),u=/\r\n?|\n/g,s=/\\([ \\!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-])/gu;export{u as NEWLINE_RE,s as UNESCAPE_RE,l as dedent,a as escapeHtml,g as escapeRegExp};
//# sourceMappingURL=index.js.map
