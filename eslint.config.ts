import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "no-console": "error",
    },
  },
]);
