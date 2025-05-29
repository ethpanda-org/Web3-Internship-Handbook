<script setup lang="ts">
import VPSidebarItem from '@theme/VPSidebarItem.vue'
import { useSidebarItems } from '@theme/useSidebarItems'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vuepress/client'

const route = useRoute()
const sidebarItems = useSidebarItems()

onMounted(() => {
  watch(
    () => route.hash,
    (hash) => {
      // get the sidebar DOM
      const sidebar = document.querySelector('.vp-sidebar')
      if (!sidebar) return

      // get the active sidebar item DOM, whose href equals to the current route
      const activeSidebarItem = document.querySelector(
        `.vp-sidebar .vp-sidebar-item.auto-link[href="${route.path}${hash}"]`,
      )
      if (!activeSidebarItem) return

      // get the top and height of the sidebar
      const { top: sidebarTop, height: sidebarHeight } =
        sidebar.getBoundingClientRect()
      // get the top and height of the active sidebar item
      const { top: activeSidebarItemTop, height: activeSidebarItemHeight } =
        activeSidebarItem.getBoundingClientRect()

      // when the active sidebar item overflows the top edge of sidebar
      if (activeSidebarItemTop < sidebarTop) {
        // scroll to the top edge of sidebar
        activeSidebarItem.scrollIntoView(true)
      }
      // when the active sidebar item overflows the bottom edge of sidebar
      else if (
        activeSidebarItemTop + activeSidebarItemHeight >
        sidebarTop + sidebarHeight
      ) {
        // scroll to the bottom edge of sidebar
        activeSidebarItem.scrollIntoView(false)
      }
    },
  )
})
</script>

<template>
  <ul v-if="sidebarItems.length" class="vp-sidebar-items">
    <VPSidebarItem
      v-for="item in sidebarItems"
      :key="`${item.text}${item.link}`"
      :item="item"
    />
  </ul>
</template>

<style lang="scss">
@use '../styles/variables' as *;

.vp-sidebar-items {
  margin: 0;
  padding: 1.5rem 0;
  list-style-type: none;

  @media (max-width: $MQMobile) {
    padding: 1rem 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
}
</style>
