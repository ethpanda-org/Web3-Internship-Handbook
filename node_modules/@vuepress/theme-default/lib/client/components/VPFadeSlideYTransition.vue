<script setup lang="ts">
import type { VNode } from 'vue'

defineEmits<{
  beforeEnter: []
  beforeLeave: []
}>()
defineSlots<{
  default: () => VNode | string | null
}>()
</script>

<template>
  <Transition
    name="vp-fade-slide-y"
    mode="out-in"
    @before-enter="$emit('beforeEnter')"
    @before-leave="$emit('beforeLeave')"
  >
    <slot />
  </Transition>
</template>

<style lang="scss">
/**
 * fade-slide-y transition
 */
.vp-fade-slide-y {
  &-enter-active {
    transition: all 0.2s ease;
  }

  &-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
