<script setup lang="ts">
import type { VNode } from 'vue'
import type { AutoLinkConfig } from 'vuepress/client'
import { AutoLink } from 'vuepress/client'

defineProps<{
  /**
   * The auto link config
   */
  config: AutoLinkConfig
}>()

defineSlots<{
  default?: (config: AutoLinkConfig) => VNode | VNode[]
  before?: (config: AutoLinkConfig) => VNode | VNode[] | null
  after?: (config: AutoLinkConfig) => VNode | VNode[] | null
}>()
</script>

<template>
  <AutoLink :config="config">
    <template v-if="$slots.default" #default>
      <slot v-bind="config" />
    </template>
    <template #before>
      <slot name="before" v-bind="config" />
    </template>
    <template #after>
      <slot name="after" v-bind="config" />
    </template>
  </AutoLink>
</template>
