// @ts-check
import { defineConfig, fontProviders, svgoOptimizer } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { config } from "./src/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: config.site.url,
  base: "/",
  trailingSlash: "never",

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist",
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), icon()],

  experimental: {
    svgOptimizer: svgoOptimizer(),
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
