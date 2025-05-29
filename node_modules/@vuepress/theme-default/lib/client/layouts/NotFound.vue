<script setup lang="ts">
import { useData } from '@theme/useData'
import { computed } from 'vue'
import { RouteLink } from 'vuepress/client'

const { routeLocale, themeLocale } = useData()

const messages = computed(() => themeLocale.value.notFound ?? ['Not Found'])

const getMsg = (): string =>
  messages.value[Math.floor(Math.random() * messages.value.length)]

const homeLink = computed(() => themeLocale.value.home ?? routeLocale.value)
const homeText = computed(() => themeLocale.value.backToHome ?? 'Back to home')
</script>

<template>
  <div class="vp-theme-container" vp-container>
    <main class="page">
      <div vp-content>
        <h1>404</h1>

        <blockquote>{{ getMsg() }}</blockquote>

        <RouteLink :to="homeLink">{{ homeText }}</RouteLink>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.vp-theme-container {
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  @media (max-width: 959px) {
    padding: 2rem;
  }
}
</style>
