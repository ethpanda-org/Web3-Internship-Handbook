import { h } from 'vue';
export const VPHeader = ({ level = 2, text, anchor, }) => h(`h${level || 2}`, { id: anchor, tabindex: '-1' }, h('a', { href: `#${anchor}`, class: 'header-anchor' }, h('span', text)));
