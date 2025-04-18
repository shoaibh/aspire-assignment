import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),  svgr({
    svgrOptions: {
      icon: true,
    },
    // 👇 THIS LINE IS REQUIRED for `ReactComponent` named import to work
    include: '**/*.svg',
  }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
