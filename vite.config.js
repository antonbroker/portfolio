import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base for GitHub Pages if deploying to username.github.io/portfolio
export default defineConfig({
  plugins: [react()],
  base: './',
})
