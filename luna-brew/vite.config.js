import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig(({ mode }) => ({
  base: mode === 'pages' ? '/luna-brew/' : '/',
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
}))
