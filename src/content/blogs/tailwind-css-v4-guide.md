---
title: "Tailwind CSS v4: What's New and How to Migrate"
description: "Everything you need to know about Tailwind CSS v4 — the new CSS-first config, performance improvements, and migration guide from v3."
publishedDate: 2026-05-15
tags: ["tailwind", "css", "frontend", "migration"]
coverImage: "/images/tailwind-v4-cover.jpg"
draft: false
---

# Tailwind CSS v4

Tailwind CSS v4 is a ground-up rewrite that moves configuration from JavaScript to CSS, delivers ~10× faster builds, and removes the need for PostCSS in most setups.

---

## What's New at a Glance

| Feature | v3 | v4 |
| ------- | -- | -- |
| Config format | `tailwind.config.js` | CSS `@theme` |
| PostCSS required | Yes | No (optional) |
| Build speed | Baseline | ~10× faster |
| CSS variables for tokens | Opt-in | Default |
| `@apply` support | Yes | Yes |
| Oxide engine | No | Yes |

---

## Installation

```bash
# New project
pnpm add tailwindcss@next @tailwindcss/vite

# Or with PostCSS
pnpm add tailwindcss@next @tailwindcss/postcss
```

### Vite Integration

```js title="vite.config.ts"
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

### CSS Entry Point

```css title="src/styles/global.css"
@import "tailwindcss";
```

That's it. No `tailwind.config.js` needed for basic usage.

---

## CSS-First Configuration with `@theme`

In v4, your design tokens live in CSS:

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-brand: oklch(60% 0.2 240);
  --color-brand-hover: oklch(55% 0.22 240);

  /* Typography */
  --font-sans: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Spacing scale */
  --spacing-18: 4.5rem;
  --spacing-22: 5.5rem;

  /* Border radius */
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
}
```

These tokens become both **utility classes** and **CSS custom properties** automatically:

```html
<button class="bg-brand hover:bg-brand-hover text-white px-18 rounded-xl">
  Click me
</button>
```

```css
/* In your CSS */
.card {
  border-radius: var(--radius-xl);
  background: var(--color-brand);
}
```

---

## Migrating from v3

### Step 1: Update Dependencies

```bash
pnpm remove tailwindcss postcss autoprefixer
pnpm add tailwindcss@next @tailwindcss/vite
```

### Step 2: Convert Config to CSS

```js title="tailwind.config.js (v3 — delete this)"
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#3b82f6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
};
```

```css title="src/styles/global.css (v4)"
@import "tailwindcss";

@theme {
  --color-brand: #3b82f6;
  --font-sans: "Inter", sans-serif;
}
```

### Step 3: Update Renamed Utilities

| v3 | v4 |
| -- | -- |
| `shadow-sm` | `shadow-xs` |
| `shadow` | `shadow-sm` |
| `rounded` | `rounded-sm` |
| `blur` | `blur-sm` |
| `drop-shadow` | `drop-shadow-sm` |
| `inset-shadow-*` | New in v4 |

> **Tip:** Run the official migration codemod: `pnpx @tailwindcss/upgrade@next`

---

## New Utilities in v4

### Composable Variants

```html
<!-- not-[:focus]:opacity-50 — opacity 50% when NOT focused -->
<button class="opacity-100 not-[:focus]:opacity-50">Button</button>

<!-- group-has-[:checked]:block — show when a child checkbox is checked -->
<div class="group hidden group-has-[:checked]:block">...</div>
```

### `starting-style` Variant (Entry Animations)

```html
<div class="
  opacity-100 scale-100
  starting:opacity-0 starting:scale-95
  transition-all duration-300
">
  Fades in on mount
</div>
```

### Color Mix

```html
<div class="bg-brand/30">30% opacity brand color</div>
<div class="text-brand/80">80% opacity brand text</div>
```

---

## Dark Mode

```css
@theme {
  --color-background: #ffffff;
  --color-text: #111827;
}

@media (prefers-color-scheme: dark) {
  @theme {
    --color-background: #0f172a;
    --color-text: #f8fafc;
  }
}
```

Or class-based dark mode:

```css
@variant dark (&:where(.dark, .dark *));
```

---

## Performance: Why Is v4 So Much Faster?

The new **Oxide engine** is written in Rust and:

1. Uses **incremental builds** — only re-processes changed files
2. Detects utilities with a dedicated parser instead of regex
3. Ships as a native binary with no Node.js dependencies for the core

On large projects, cold builds go from ~3s to ~0.3s, and hot rebuilds are near-instant.

---

## Should You Migrate Now?

| Project type | Recommendation |
| ------------ | -------------- |
| New project | Yes — start with v4 |
| Active v3 project | Run the codemod, test thoroughly |
| Stable v3 project (no active dev) | Wait for v4.1 for more stability |
| Using obscure v3 plugins | Check plugin compatibility first |
