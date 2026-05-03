import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routeTreeFileFooter: [
        [
          "import type { getRouter } from './router.tsx'",
          "import type { createStart } from '@tanstack/react-start'",
          "declare module '@tanstack/react-start' {",
          "  interface Register {",
          "    ssr: true",
          "    router: Awaited<ReturnType<typeof getRouter>>",
          "  }",
          "}",
        ].join("\n"),
      ],
    }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
  },
});
