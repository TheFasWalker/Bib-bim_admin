import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const env = process.env;

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),

  ],
  define: {
    'process.env': env
  },
})
