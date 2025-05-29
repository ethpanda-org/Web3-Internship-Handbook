<script setup lang="ts">
import type { VNode } from 'vue'

withDefaults(
  defineProps<{
    /**
     * The type of the badge
     */
    type?: string
    /**
     * The text of the badge
     */
    text?: string
    /**
     * The vertical align of the badge
     */
    vertical?: string
  }>(),
  {
    type: 'tip',
    text: '',
    vertical: undefined,
  },
)

defineSlots<{
  default?: () => VNode | VNode[] | string | null
}>()
</script>

<template>
  <span
    class="vp-badge"
    :class="type"
    :style="{
      verticalAlign: vertical,
    }"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<style lang="scss">
.vp-badge {
  display: inline-block;
  vertical-align: top;

  height: 1.3em;
  padding: 0 6px;
  border-radius: 3px;

  background: var(--vp-c-accent-soft);
  color: var(--vp-c-accent);

  font-size: 0.875em;
  line-height: 1.3;

  transition:
    background var(--vp-t-color),
    color var(--vp-t-color);

  & + & {
    margin-inline-start: 5px;
  }

  &.tip {
    background: var(--badge-c-tip-bg);
    color: var(--badge-c-tip-text);
  }

  &.warning {
    background: var(--badge-c-warning-bg);
    color: var(--badge-c-warning-text);
  }

  &.danger {
    background: var(--badge-c-danger-bg);
    color: var(--badge-c-danger-text);
  }

  &.important {
    background: var(--badge-c-important-bg);
    color: var(--badge-c-important-text);
  }

  &.info {
    background: var(--badge-c-info-bg);
    color: var(--badge-c-info-text);
  }

  &.note {
    background: var(--badge-c-note-bg);
    color: var(--badge-c-note-text);
  }

  // update the vertical align for the badge in toc
  .table-of-contents & {
    vertical-align: middle;
  }
}
</style>
