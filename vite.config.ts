import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [viteReact(), tailwindcss(), tsConfigPaths()],
    server: {
      host: "0.0.0.0",
      strictPort: false,
    },
  };
});
