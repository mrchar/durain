import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "@vueuse/core"],
      dirs: ["src/composables"],
      eslintrc: {
        enabled: true,
        filepath: "./auto-import.json",
      },
    }),
    Components({ dirs: ["src/components", "src/layouts"] }),
  ],
});
