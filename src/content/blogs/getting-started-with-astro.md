---
title: "Getting Started with Astro 5"
description: "Learn how to build fast, content-focused websites with Astro 5 — from zero to deployed in under an hour."
publishedDate: 2026-02-01
tags: ["astro", "web", "tutorial", "beginner"]
coverImage: "/images/astro-cover.jpg"
draft: false
---

# Getting Started with Astro 5

Astro is a modern web framework focused on **content-heavy sites** — blogs, marketing pages, documentation, and portfolios. Its core idea is simple: ship less JavaScript.

## Why Astro?

Unlike React or Vue, Astro renders everything to static HTML at build time. Client-side JavaScript is only sent for interactive islands.

| Feature | Astro | Next.js | Nuxt |
| ------- | :---: | :-----: | :--: |
| Static-first | ✅ | ⚠️ | ⚠️ |
| Zero JS by default | ✅ | ❌ | ❌ |
| Multi-framework | ✅ | ❌ | ❌ |
| Content Collections | ✅ | ❌ | ❌ |

---

## Installation

```bash
# Create a new project
pnpm create astro@latest my-site

# Navigate into the project
cd my-site

# Start the dev server
pnpm dev
```

Your site will be live at `http://localhost:4321`.

---

## Project Structure

```
my-site/
├── public/          # Static assets (copied as-is)
├── src/
│   ├── components/  # Reusable .astro components
│   ├── layouts/     # Page wrappers
│   ├── pages/       # File-based routing
│   └── content/     # Content Collections
├── astro.config.mjs
└── package.json
```

---

## Your First Page

Create `src/pages/hello.astro`:

```astro
---
const name = "Astro";
---

<html lang="en">
  <head>
    <title>Hello {name}</title>
  </head>
  <body>
    <h1>Hello, {name}!</h1>
    <p>Welcome to my Astro site.</p>
  </body>
</html>
```

Visit `/hello` and you'll see **Hello, Astro!**.

---

## Content Collections

Content Collections let you type-safe manage Markdown/MDX content.

```ts title="src/content.config.ts"
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

> **Tip:** Always define a strict schema — Astro validates frontmatter at build time and gives you full TypeScript autocompletion.

---

## Deploying

Astro supports many adapters. For a static deploy to Netlify:

```bash
pnpm astro add netlify
pnpm build
```

Then push your repo and Netlify will auto-deploy on every push to `main`.

---

## Next Steps

- [x] Create a project
- [x] Build your first page
- [ ] Add a blog with Content Collections
- [ ] Deploy to production
- [ ] Add an RSS feed

Happy building! :rocket:
