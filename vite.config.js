import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "node:path"

function generateAlias(absolutePath) {
    // eslint-disable-next-line no-undef
  return path.resolve(process.cwd(), absolutePath);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/homepage/',
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      "@": generateAlias("/"),
      "@img": generateAlias("/public/img/"),
      "@pdfs": generateAlias("/public/pdfs/")
    }
  }
})
