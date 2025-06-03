import { useToggle } from '@vueuse/core';
import { defineComponent, h } from 'vue';
import { useChangelog, useGitLocale, useLastUpdated, } from '../composables/index.js';
import { VPHeader } from './VPHeader.js';
import '../styles/vars.css';
import '../styles/changelog.css';
export const GitChangelog = defineComponent({
    name: 'GitChangelog',
    props: {
        /** Title of changelog */
        title: String,
        /** header level of changelog */
        headerLevel: {
            type: Number,
            default: 2,
        },
    },
    setup(props) {
        const changelog = useChangelog();
        const locale = useGitLocale();
        const lastUpdated = useLastUpdated();
        const [active, toggleActive] = useToggle();
        const ChangelogHeader = () => h('div', { class: 'vp-changelog-header', onClick: () => toggleActive() }, [
            h('div', { class: 'vp-latest-updated' }, [
                h('span', { class: 'vp-changelog-icon' }),
                h('span', { 'data-allow-mismatch': '' }, lastUpdated.value.text),
            ]),
            h('div', [
                h('span', { class: 'vp-changelog-menu-icon' }),
                h('span', locale.value.viewChangelog),
            ]),
        ]);
        const ReleaseTag = ({ item, }) => h('li', { class: 'vp-changelog-item-tag' }, h('div', [
            h('a', { class: 'vp-changelog-tag' }, h('code', item.tag)),
            h('span', { 'class': 'vp-changelog-date', 'data-allow-mismatch': '' }, [
                locale.value.timeOn,
                ' ',
                h('time', { datetime: new Date(item.time).toISOString() }, item.date),
            ]),
        ]));
        const Commit = ({ item, }) => h('li', { class: 'vp-changelog-item-commit' }, [
            h(item.commitUrl ? 'a' : 'span', {
                class: 'vp-changelog-hash',
                href: item.commitUrl,
                target: '_blank',
                rel: 'noreferrer',
            }, [h('code', item.hash.slice(0, 5))]),
            h('span', { class: 'vp-changelog-divider' }, '-'),
            h('span', { class: 'vp-changelog-message', innerHTML: item.message }),
            h('span', { 'class': 'vp-changelog-date', 'data-allow-mismatch': '' }, [
                locale.value.timeOn || 'on',
                ' ',
                h('time', { datetime: new Date(item.time).toISOString() }, item.date),
            ]),
        ]);
        return () => changelog.value.length
            ? [
                h(VPHeader, {
                    level: props.headerLevel,
                    anchor: 'doc-changelog',
                    text: props.title || locale.value.changelog,
                }),
                h('div', { class: ['vp-changelog-wrapper', { active: active.value }] }, [
                    h(ChangelogHeader),
                    h('ul', { class: 'vp-changelog-list' }, [
                        changelog.value.map((item) => item.tag
                            ? h(ReleaseTag, { item, key: item.tag })
                            : h(Commit, { item, key: item.hash })),
                    ]),
                ]),
            ]
            : null;
    },
});
