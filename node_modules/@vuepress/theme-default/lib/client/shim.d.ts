declare module '*.vue' {
  import type { ComponentOptions } from 'vue'

  const component: ComponentOptions
  export default component
}

declare module '*/styles/_variables.module.scss' {
  const cSSVariables: Record<string, string>
  export default cSSVariables
}
