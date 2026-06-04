// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { config } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: config.site.url,
  base: "/",
  trailingSlash: "never",

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()],

  markdown: {},
});
