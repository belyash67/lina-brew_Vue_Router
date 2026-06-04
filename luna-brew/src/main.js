import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import App from './App.vue'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0a0806',
          surface: '#13100d',
          primary: '#c8a96e',
          secondary: '#7c5c3a',
          accent: '#e8d5a3',
          error: '#cf6679',
          info: '#8fa3b1',
          success: '#7aad8c',
          warning: '#d4905a',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      rounded: 0,
    },
  },
})

createApp(App).use(vuetify).mount('#app')
