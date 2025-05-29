<script setup lang="ts">
import VPAutoLink from '@theme/VPAutoLink.vue'
import VPDropdownTransition from '@theme/VPDropdownTransition.vue'
import { useToggle } from '@vueuse/core'
import { computed, toRefs } from 'vue'
import { onContentUpdated } from 'vuepress/client'
import type { AutoLinkOptions, NavGroup } from '../../shared/index.js'

const props = defineProps<{
  /** dropdown config */
  config: NavGroup<AutoLinkOptions | NavGroup<AutoLinkOptions>>
}>()

const { config } = toRefs(props)

const [open, toggleOpen] = useToggle()

const dropdownAriaLabel = computed(
  () => config.value.ariaLabel || config.value.text,
)

const isLastItemOfArray = (arrayItem: unknown, array: unknown[]): boolean =>
  array[array.length - 1] === arrayItem

/**
 * Open the dropdown when user tab and click from keyboard.
 *
 * Use event.detail to detect tab and click from keyboard.
 * The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
 */
const handleDropdown = (e: UIEvent): void => {
  if (e.detail === 0) toggleOpen()
  else toggleOpen(false)
}

onContentUpdated(() => {
  toggleOpen(false)
})
</script>

<template>
  <div class="vp-navbar-dropdown-wrapper" :class="{ open }">
    <button
      class="vp-navbar-dropdown-title"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="handleDropdown"
    >
      <span class="title">{{ config.text }}</span>
      <span class="arrow down" />
    </button>

    <button
      class="vp-navbar-dropdown-title-mobile"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="() => toggleOpen()"
    >
      <span class="title">{{ config.text }}</span>
      <span class="arrow" :class="open ? 'down' : 'right'" />
    </button>

    <VPDropdownTransition>
      <ul v-show="open" class="vp-navbar-dropdown">
        <li
          v-for="child in config.children"
          :key="child.text"
          class="vp-navbar-dropdown-item"
        >
          <template v-if="'children' in child">
            <h4 class="vp-navbar-dropdown-subtitle">
              <VPAutoLink
                v-if="child.link"
                :config="child"
                @focusout="
                  () => {
                    if (
                      isLastItemOfArray(child, config.children) &&
                      child.children.length === 0
                    ) {
                      open = false
                    }
                  }
                "
              />

              <span v-else>{{ child.text }}</span>
            </h4>

            <ul class="vp-navbar-dropdown-subitem-wrapper">
              <li
                v-for="grandchild in child.children"
                :key="grandchild.link"
                class="vp-navbar-dropdown-subitem"
              >
                <VPAutoLink
                  :config="grandchild"
                  @focusout="
                    () => {
                      if (
                        isLastItemOfArray(grandchild, child.children) &&
                        isLastItemOfArray(child, config.children)
                      ) {
                        toggleOpen(false)
                      }
                    }
                  "
                />
              </li>
            </ul>
          </template>

          <template v-else>
            <VPAutoLink
              :config="child"
              @focusout="
                () => {
                  if (isLastItemOfArray(child, config.children)) {
                    toggleOpen(false)
                  }
                }
              "
            />
          </template>
        </li>
      </ul>
    </VPDropdownTransition>
  </div>
</template>

<style lang="scss">
@use '../styles/mixins';
@use '../styles/variables' as *;

.vp-navbar-dropdown-wrapper {
  cursor: pointer;

  &:not(.mobile) {
    height: 1.8rem;

    &:hover,
    &.open {
      .vp-navbar-dropdown {
        // override the inline style.
        display: block !important;
      }
    }
  }
}

.vp-navbar-dropdown {
  .vp-navbar-dropdown-wrapper.mobile & {
    @include mixins.dropdown-wrapper;

    padding-top: 0.5rem;
  }

  .vp-navbar-dropdown-wrapper:not(.mobile) & {
    position: absolute;
    inset-inline-end: 0;
    top: 100%;

    display: none;

    overflow-y: auto;

    box-sizing: border-box;

    // Avoid height shake by clicking
    height: auto !important;
    max-height: calc(100vh - 2.7rem);
    margin: 0;
    padding: 0.6rem 0;
    border: 1px solid var(--vp-c-gutter);
    border-radius: 0.5rem;

    background-color: var(--vp-c-bg-elv);

    text-align: start;
    white-space: nowrap;
  }
}

.vp-navbar-dropdown-title {
  display: block;

  padding: inherit;
  border: none;

  background: transparent;
  color: var(--vp-c-text);

  font-weight: 500;
  font-size: 0.9rem;
  font-family: inherit;
  line-height: 1.4rem;

  cursor: inherit;

  .vp-navbar-dropdown-wrapper.mobile & {
    display: none;
  }

  &:hover {
    border-color: transparent;
  }
}

.vp-navbar-dropdown-title-mobile {
  display: none;

  padding: inherit;
  border: none;

  background: transparent;
  color: var(--vp-c-text);

  font-weight: 600;
  font-size: inherit;
  font-family: inherit;
  line-height: 1.4rem;

  cursor: inherit;

  .vp-navbar-dropdown-wrapper.mobile & {
    display: block;
  }

  &:hover {
    color: var(--vp-c-accent);
  }
}

.vp-navbar-dropdown-item {
  color: inherit;
  line-height: 1.7rem;

  .auto-link {
    position: relative;

    display: block;

    margin-bottom: 0;
    padding: 0 1.25rem;
    border-bottom: none;

    font-weight: 400;
    line-height: 1.7rem;

    &:hover {
      color: var(--vp-c-accent);
    }

    &.auto-link-active {
      color: var(--vp-c-accent);

      &::after {
        content: '';

        position: absolute;
        inset-inline-start: 9px;
        top: calc(50% - 2px);

        width: 0;
        height: 0;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-inline-start: 5px solid var(--vp-c-accent);
      }
    }
  }

  .vp-navbar-dropdown-wrapper.mobile & > a {
    line-height: 2rem;
  }
}

.vp-navbar-dropdown-subtitle {
  margin: 0.45rem 0 0;
  padding: 1rem 0 0.45rem;
  border-top: 1px solid var(--vp-c-gutter);
  font-size: 0.9rem;

  .vp-navbar-dropdown-wrapper.mobile & {
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
    border-top: 0;

    line-height: 2rem;
  }

  .vp-navbar-dropdown-item:first-child & {
    margin-top: 0;
    padding-top: 0;
    border-top: 0;
  }

  > span {
    padding-inline: 1.25rem 1.5rem;
  }

  > .auto-link {
    font-weight: inherit;

    &.auto-link-active {
      &::after {
        display: none;
      }
    }
  }
}

.vp-navbar-dropdown-subitem-wrapper {
  padding: 0;
  list-style: none;
}

.vp-navbar-dropdown-subitem {
  font-size: 0.9em;

  .vp-navbar-dropdown-wrapper.mobile & {
    padding-inline-start: 1rem;
  }
}
</style>
