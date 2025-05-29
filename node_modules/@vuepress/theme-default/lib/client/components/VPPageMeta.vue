<script setup lang="ts">
import VPAutoLink from '@theme/VPAutoLink.vue'
import VPEditIcon from '@theme/VPEditIcon.vue'
import { useData } from '@theme/useData'
import { useEditLink } from '@theme/useEditLink'
import { useContributors, useLastUpdated } from '@vuepress/plugin-git/client'

const { frontmatter, themeLocale } = useData()
const contributors = useContributors(
  () =>
    frontmatter.value.contributors ?? themeLocale.value.contributors ?? true,
)
const editLink = useEditLink()
const lastUpdated = useLastUpdated(
  () => frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true,
)
</script>

<template>
  <footer class="vp-page-meta">
    <div v-if="editLink" class="vp-meta-item edit-link">
      <VPAutoLink class="label" :config="editLink">
        <template #before>
          <VPEditIcon />
        </template>
      </VPAutoLink>
    </div>

    <div class="vp-meta-item git-info">
      <div v-if="lastUpdated" class="vp-meta-item last-updated">
        <span class="meta-item-label"
          >{{ themeLocale.lastUpdatedText ?? lastUpdated.locale }}:
        </span>
        <time
          class="meta-item-info"
          :datetime="lastUpdated.iso"
          data-allow-mismatch
          >{{ lastUpdated.text }}</time
        >
      </div>

      <div v-if="contributors.length" class="vp-meta-item contributors">
        <span class="meta-item-label"
          >{{ themeLocale.contributorsText }}:
        </span>
        <span class="meta-item-info">
          <template v-for="(contributor, index) in contributors" :key="index">
            <span class="contributor" :title="`email: ${contributor.email}`">
              {{ contributor.name }}
            </span>
            <template v-if="index !== contributors.length - 1">, </template>
          </template>
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@use '../styles/mixins';
@use '../styles/variables' as *;

.vp-page-meta {
  @include mixins.content-wrapper;

  & {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    overflow: auto;

    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  @media print {
    margin: 0 !important;
    padding-inline: 0 !important;
  }

  @media (max-width: $MQMobile) {
    display: block;
  }

  .vp-meta-item {
    flex-grow: 1;

    .vp-meta-label {
      font-weight: 500;

      &:not(a) {
        color: var(--vp-c-text-mute);
      }
    }

    .vp-meta-info {
      color: var(--vp-c-text-mute);
      font-weight: 400;
    }
  }

  .git-info {
    text-align: end;
  }

  .edit-link {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    margin-inline-end: 0.5rem;
    font-size: 0.875em;

    @media print {
      display: none;
    }

    .edit-icon {
      position: relative;
      bottom: -0.125em;

      width: 1em;
      height: 1em;
      margin-inline-end: 0.25em;
    }
  }

  .last-updated,
  .contributors {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 0.875em;

    @media (max-width: $MQMobile) {
      font-size: 0.825em;
      text-align: start;
    }
  }
}
</style>
