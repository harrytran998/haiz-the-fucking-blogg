import './styles/main.postcss'
import generatedRoutes from 'pages-generated'
import { setupLayouts } from 'layouts-generated'

const routes = setupLayouts(generatedRoutes)

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, (ctx) => {
  // install all modules under `modules/`
  Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.(ctx))
})
