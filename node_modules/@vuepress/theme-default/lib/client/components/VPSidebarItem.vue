<script setup lang="ts">
import VPAutoLink from '@theme/VPAutoLink.vue'
import VPDropdownTransition from '@theme/VPDropdownTransition.vue'
import { isActiveSidebarItem } from '@theme/isActiveSidebarItem'
import { useToggle } from '@vueuse/core'
import { computed, nextTick, onBeforeUnmount, toRefs } from 'vue'
import { useRoute, useRouter } from 'vuepress/client'
import type { SidebarGroupItem, SidebarItem } from '../typings.js'

const props = withDefaults(
  defineProps<{
    /**
     * The sidebar item to be rendered
     */
    item: SidebarItem
    /**
     * The depth of the current sidebar item
     */
    depth?: number
  }>(),
  { depth: 0 },
)

const { item, depth } = toRefs(props)
const route = useRoute()
const router = useRouter()

const collapsible = computed(() => (item.value as SidebarGroupItem).collapsible)
const isActive = computed(() => isActiveSidebarItem(item.value, route))
const itemClass = computed(() => ({
  'vp-sidebar-item': true,
  'vp-sidebar-heading': depth.value === 0,
  'active': isActive.value,
  'collapsible': collapsible.value,
}))

const isOpenDefault = computed(() =>
  collapsible.value ? isActive.value : true,
)
// eslint-disable-next-line vue/no-ref-object-reactivity-loss
const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value)
const onClick = (e: Event): void => {
  if (collapsible.value) {
    e.preventDefault()
    // toggle open status on click
    toggleIsOpen()
  }
}

// reset open status after navigation
const unregisterRouterHook = router.afterEach(() => {
  void nextTick(() => {
    isOpen.value = isOpenDefault.value
  })
})
onBeforeUnmount(() => {
  unregisterRouterHook()
})
</script>

<template>
  <li>
    <VPAutoLink v-if="item.link" :class="itemClass" :config="item">
      <template #after>
        <span
          v-if="collapsible"
          class="arrow"
          :class="isOpen ? 'down' : 'right'"
        />
      </template>
    </VPAutoLink>
    <p
      v-else
      tabindex="0"
      :class="itemClass"
      @click="onClick"
      @keydown.enter="onClick"
    >
      {{ item.text }}
      <span
        v-if="collapsible"
        class="arrow"
        :class="isOpen ? 'down' : 'right'"
      />
    </p>

    <VPDropdownTransition v-if="'children' in item && item.children.length">
      <ul v-show="isOpen" class="vp-sidebar-children">
        <VPSidebarItem
          v-for="child in item.children"
          :key="`${depth}${child.text}${child.link}`"
          :item="child"
          :depth="depth + 1"
        />
      </ul>
    </VPDropdownTransition>
  </li>
</template>

<style lang="scss">
@use '../styles/mixins';
@use '../styles/variables' as *;

.vp-sidebar-item {
  border-inline-start: 0.25rem solid transparent;
  color: var(--vp-c-text);
  cursor: default;

  &:focus-visible {
    outline-width: 1px;
    outline-offset: -1px;
  }

  &.vp-sidebar-heading {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding-block: 0.35rem;
    padding-inline: 1.25rem 1.5rem;

    font-weight: bold;
    font-size: 1.1em;

    transition: color 0.15s ease;

    + .vp-sidebar-children {
      @include mixins.dropdown-wrapper;

      margin-bottom: 0.75rem;
    }
  }

  &.collapsible {
    cursor: pointer;
  }

  &:not(.vp-sidebar-heading) {
    display: inline-block;

    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding-block: 0.35rem;
    padding-inline: 2rem 1rem;

    font-weight: 400;
    font-size: 1em;
    line-height: 1.4;

    + .vp-sidebar-children {
      padding-inline-start: 1rem;
      font-size: 0.95em;
    }

    .vp-sidebar-children .vp-sidebar-children & {
      padding-block: 0.25rem;
      padding-inline: 1.75rem 1rem;

      &.active {
        border-inline-start-color: transparent;
        font-weight: 500;
      }
    }

    a.vp-sidebar-heading + .vp-sidebar-children &.active {
      border-inline-start-color: transparent;
    }
  }

  &.active:not(p.vp-sidebar-heading) {
    border-inline-start-color: var(--vp-c-accent);
    color: var(--vp-c-accent);
    font-weight: 600;
  }

  .auto-link {
    display: block;
  }

  &.auto-link {
    display: block;
    cursor: pointer;

    &:hover {
      color: var(--vp-c-accent);
    }
  }
}
</style>
