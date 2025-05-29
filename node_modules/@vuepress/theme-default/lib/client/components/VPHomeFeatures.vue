<script setup lang="ts">
import { useData } from '@theme/useData'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared/index.js'

const { frontmatter } = useData<DefaultThemeHomePageFrontmatter>()

const features = computed(() => frontmatter.value.features ?? [])
</script>

<template>
  <div v-if="features.length" class="vp-features">
    <div v-for="feature in features" :key="feature.title" class="vp-feature">
      <h2>{{ feature.title }}</h2>
      <p>{{ feature.details }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@use '../styles/variables' as *;

.vp-features {
  display: flex;
  flex-wrap: wrap;
  place-content: stretch space-between;
  align-items: flex-start;

  margin-top: 2.5rem;
  padding: 1.2rem 0;
  border-top: 1px solid var(--vp-c-gutter);

  transition: border-color var(--vp-t-color);

  @media (max-width: $MQMobile) {
    flex-direction: column;
  }
}

.vp-feature {
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;

  @media (max-width: $MQMobile) {
    max-width: 100%;
    padding: 0 2.5rem;
  }

  h2 {
    padding-bottom: 0;
    border-bottom: none;
    font-weight: 500;
    font-size: 1.4rem;

    @media (max-width: $MQMobileNarrow) {
      font-size: 1.25rem;
    }
  }

  p {
    color: var(--vp-c-text-mute);
  }
}
</style>
