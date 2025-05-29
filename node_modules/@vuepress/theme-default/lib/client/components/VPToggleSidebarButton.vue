<script setup lang="ts">
import { useData } from '@theme/useData'

defineEmits<{ toggle: [] }>()

const { themeLocale } = useData()
</script>

<template>
  <div
    class="vp-toggle-sidebar-button"
    :title="themeLocale.toggleSidebar"
    aria-expanded="false"
    role="button"
    tabindex="0"
    @click="$emit('toggle')"
  >
    <div class="icon" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style lang="scss">
/* stylelint-disable max-nesting-depth */
@use '../styles/variables' as *;

.vp-toggle-sidebar-button {
  position: absolute;
  inset-inline-start: 1rem;
  top: 0.6rem;

  display: none;

  padding: 0.6rem;

  cursor: pointer;

  @media screen and (max-width: $MQMobile) {
    display: block;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;

    cursor: inherit;

    span {
      display: inline-block;

      width: 100%;
      height: 2px;
      border-radius: 2px;

      background-color: var(--vp-c-text);

      transition: transform var(--vp-t-transform);

      &:nth-child(2) {
        margin: 6px 0;
      }

      .vp-theme-container.sidebar-open & {
        &:nth-child(1) {
          transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);
        }

        &:nth-child(2) {
          transform: scale3d(0, 1, 1);
        }

        &:nth-child(3) {
          transform: rotate(-45deg) translate3d(6px, -6px, 0);
        }

        &:nth-child(1),
        &:nth-child(3) {
          transform-origin: center;
        }
      }
    }
  }
}
</style>
