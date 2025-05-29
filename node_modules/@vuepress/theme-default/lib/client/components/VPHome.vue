<script setup lang="ts">
import VPHomeFeatures from '@theme/VPHomeFeatures.vue'
import VPHomeFooter from '@theme/VPHomeFooter.vue'
import VPHomeHero from '@theme/VPHomeHero.vue'
import { Content } from 'vuepress/client'
</script>

<template>
  <main class="vp-home">
    <VPHomeHero />
    <VPHomeFeatures />
    <div vp-content>
      <Content />
    </div>
    <VPHomeFooter />
  </main>
</template>

<style lang="scss">
@use '../styles/variables' as *;

.vp-home {
  display: block;
  max-width: var(--homepage-width);
  margin: 0 auto;
  padding: var(--navbar-height) 2rem 0;

  @media (max-width: $MQMobileNarrow) {
    padding-inline: 1.5rem;
  }

  [vp-content] {
    margin: 0;
    padding: 0;
  }
}
</style>
