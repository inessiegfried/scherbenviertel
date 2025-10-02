import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";

function generateAlias(absolutePath) {
  // eslint-disable-next-line no-undef
  return path.resolve(process.cwd(), absolutePath);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  assetsInclude: ["/public/pdfs/*.pdf"],
  base: "/scherbenviertel/",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": generateAlias("/"),
      "@components": generateAlias("/src/components/"),
      "@pages": generateAlias("/src/pages/"),
      "@img": generateAlias("/img/"),
      "@pdfs": generateAlias("/pdfs/"),
    },
  },
});
