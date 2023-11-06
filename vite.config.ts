import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { defineConfig } from "vite";
import Inspect from 'vite-plugin-inspect';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite({
      vendorRoots: [
      
      ]
    }), tsconfigPaths(), Inspect()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    build: {
      rollupOptions: {
        external: ['@floating-ui/dom']
        
      }
    }
  };
});
