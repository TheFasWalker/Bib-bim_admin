import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const env = process.env;

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': env
  },
})
