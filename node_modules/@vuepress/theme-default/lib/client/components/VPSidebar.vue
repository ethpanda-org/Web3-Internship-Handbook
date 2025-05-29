<script setup lang="ts">
import VPNavbarItems from '@theme/VPNavbarItems.vue'
import VPSidebarItems from '@theme/VPSidebarItems.vue'
import type { VNode } from 'vue'

defineSlots<{
  top?: (props: Record<never, never>) => VNode | VNode[] | null
  bottom?: (props: Record<never, never>) => VNode | VNode[] | null
}>()
</script>

<template>
  <aside class="vp-sidebar" vp-sidebar>
    <VPNavbarItems />
    <slot name="top" />
    <VPSidebarItems />
    <slot name="bottom" />
  </aside>
</template>

<style lang="scss">
@use '../styles/variables' as *;

.vp-sidebar {
  position: fixed;
  inset-inline-start: 0;

  // leave space for navbar
  top: var(--navbar-height);
  bottom: 0;
  z-index: 10;

  overflow-y: auto;

  box-sizing: border-box;
  width: var(--sidebar-width);
  margin: 0;
  border-inline-end: 1px solid var(--vp-c-border);

  background-color: var(--vp-sidebar-c-bg);

  font-size: 1rem;

  transition:
    transform var(--vp-t-transform),
    background-color var(--vp-t-color),
    border-color var(--vp-t-color);

  scrollbar-color: var(--vp-c-accent-bg) var(--vp-c-gutter);
  scrollbar-width: thin;

  // narrow desktop / iPad
  @media (max-width: $MQNarrow) {
    width: var(--sidebar-width-mobile);
    font-size: 0.9rem;
  }

  // wide mobile
  @media (max-width: $MQMobile) {
    top: 0;

    // leave space for navbar
    padding-top: var(--navbar-height);
    transform: translateX(-100%);

    [dir='rtl'] & {
      transform: translateX(100%);
    }
  }

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--vp-c-gutter);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--vp-c-accent-bg);
  }

  // override styles
  .vp-navbar-items {
    display: none;
    padding: 0.5rem 0 0.75rem;
    border-bottom: 1px solid var(--vp-c-gutter);
    transition: border-color var(--vp-t-color);

    @media (max-width: $MQMobile) {
      display: block;

      .vp-navbar-dropdown-item .route-link-active::after {
        top: calc(1rem - 2px);
      }
    }

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .auto-link {
      font-weight: 600;
    }
  }

  // override styles
  .vp-navbar-item {
    display: block;

    padding-block: 0.5rem;
    padding-inline: 1.5rem 0;

    font-size: 1.1em;
    line-height: 1.25rem;
  }
}
</style>
