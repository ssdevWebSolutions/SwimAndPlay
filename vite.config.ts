import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    // @ts-expect-error
    nitro: {
      preset: "vercel",
    },
  },
});
