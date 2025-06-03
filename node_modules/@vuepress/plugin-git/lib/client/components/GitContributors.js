import { defineComponent, h } from 'vue';
import { useContributors, useGitLocale } from '../composables/index.js';
import { VPHeader } from './VPHeader.js';
import '../styles/contributors.css';
export const GitContributor = ({ name, url, avatar, }) => h(url ? 'a' : 'span', {
    href: url,
    target: '_blank',
    rel: 'noreferrer',
    class: 'vp-contributor',
}, [
    avatar
        ? h('img', { src: avatar, alt: '', class: 'vp-contributor-avatar' })
        : null,
    h('span', { class: 'vp-contributor-name' }, name),
]);
export const GitContributors = defineComponent({
    name: 'GitContributors',
    props: {
        /** Contributor title */
        title: String,
        /** header level of contributor title */
        headerLevel: {
            type: Number,
            default: 2,
        },
    },
    setup(props) {
        const contributors = useContributors();
        const locale = useGitLocale();
        return () => contributors.value.length
            ? [
                h(VPHeader, {
                    level: props.headerLevel,
                    anchor: 'doc-contributors',
                    text: props.title || locale.value.contributors,
                }),
                h('div', { class: 'vp-contributors' }, contributors.value.map((item) => h(GitContributor, item))),
            ]
            : null;
    },
});
