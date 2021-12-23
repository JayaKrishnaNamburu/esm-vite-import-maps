import { defineConfig } from "vite";
import config from "./teleport.config.json";
import react from "@vitejs/plugin-react";
import { importMaps } from "vite-plugin-import-maps";

const exclude = [...Object.keys(config?.importmap?.imports || {})];

export default defineConfig({
  clearScreen: true,
  optimizeDeps: {
    exclude,
  },
  build: {
    rollupOptions: {
      external: exclude,
    },
  },
  css: {
    modules: {
      scopeBehaviour: "local",
      localsConvention: "dashesOnly",
    },
  },
  plugins: [react()],
});

/*
  HMR / React-Refresh setup check @vitejs/plugin-react
  Enable `jsx-runtime` instead of using just typescript compilation (done)
  Import maps file and import and use in index.html file and here in config
  Using assets by importing them and by the URL as well at the same time.
*/
