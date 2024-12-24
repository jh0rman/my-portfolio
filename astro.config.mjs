import { defineConfig } from 'astro/config'
import astroI18next from 'astro-i18next'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next()],
  vite: {
    plugins: [tailwindcss()]
  }
})
