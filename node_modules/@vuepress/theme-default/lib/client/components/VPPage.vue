<script setup lang="ts">
import VPPageMeta from '@theme/VPPageMeta.vue'
import VPPageNav from '@theme/VPPageNav.vue'
import type { VNode } from 'vue'
import { Content } from 'vuepress/client'

defineSlots<{
  'top'?: (props: Record<never, never>) => VNode | VNode[] | null
  'bottom'?: (props: Record<never, never>) => VNode | VNode[] | null
  'content-top'?: (props: Record<never, never>) => VNode | VNode[] | null
  'content-bottom'?: (props: Record<never, never>) => VNode | VNode[] | null
}>()
</script>

<template>
  <main class="vp-page">
    <slot name="top" />

    <div vp-content>
      <slot name="content-top" />

      <Content />

      <slot name="content-bottom" />
    </div>

    <VPPageMeta />

    <VPPageNav />

    <slot name="bottom" />
  </main>
</template>

<style lang="scss">
@use '../styles/mixins';
@use '../styles/variables' as *;

.vp-page {
  display: block;

  // leave space for navbar
  padding-top: var(--navbar-height);
  padding-bottom: 2rem;

  // leave space for sidebar
  padding-inline-start: var(--sidebar-width);

  // narrow desktop / iPad
  @media (max-width: $MQNarrow) {
    // leave space for sidebar
    padding-inline-start: var(--sidebar-width-mobile);
  }

  // wide mobile
  @media (max-width: $MQMobile) {
    // sidebar is collapsed
    padding-inline-start: 0;
  }

  [vp-content] {
    @include mixins.content-wrapper;

    & {
      padding-top: 0;
    }
  }
}
</style>
