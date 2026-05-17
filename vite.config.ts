import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => {
  const plugins = [
    tanstackStart({
      server: { entry: "server" },
    }),
    // React plugin must come after tanstackStart.
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ];

  if (command === "build") {
    plugins.push(cloudflare());
  }

  return {
    plugins,
    server: {
      host: "0.0.0.0",
      strictPort: false,
    },
  };
});
