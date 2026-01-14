import { defineClientConfig } from 'vuepress/client'
import { provide, nextTick } from 'vue'
import { useDarkMode, useThemeData } from 'vuepress-theme-plume/client'
import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    if (typeof window !== 'undefined') {
      const isDark = app.config.globalProperties.$isDark
      if (isDark && !localStorage.getItem('vuepress-theme-appearance')) {
        isDark.value = false
      }
    }
  },
  setup() {
    const isDark = useDarkMode()
    const theme = useThemeData()

    provide('toggle-appearance', async (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event
      
      const enableTransitions = () => 
        'startViewTransition' in document && 
        window.matchMedia('(prefers-reduced-motion: no-preference)').matches

      const transition = theme.value.transition
      const options = typeof transition === 'object' ? transition : {}
      
      if (!enableTransitions() || transition === false || options.appearance === false) {
        isDark.value = !isDark.value
        return
      }

      const mode = typeof options.appearance === 'string' ? options.appearance : 'fade'

      // @ts-ignore
      await document.startViewTransition(async () => {
        isDark.value = !isDark.value
        await nextTick()
      }).ready

      const keyframes: Keyframe[] | PropertyIndexedKeyframes = {}
      let duration = 400
      const innerWidth = window.innerWidth
      const innerHeight = window.innerHeight

      if (mode === 'circle-clip') {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y),
          )}px at ${x}px ${y}px)`,
        ]
        keyframes.clipPath = isDark.value ? [...clipPath].reverse() : clipPath
      } else {
        keyframes.opacity = isDark.value ? [1, 0] : [0, 1]
        duration = 300
      }

      document.documentElement.animate(
        keyframes,
        {
          duration,
          easing: 'ease-in',
          pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
          fill: 'forwards'
        },
      )
    })
  }
})
