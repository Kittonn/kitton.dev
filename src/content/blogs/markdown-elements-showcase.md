---
title: "Markdown Elements Showcase — Everything in One Post"
description: "A complete reference post covering every markdown element: headings, lists, tables, code blocks, blockquotes, images, and more."
publishedDate: 2026-01-10
tags: ["markdown", "reference", "showcase"]
coverImage: "/images/markdown-cover.jpg"
ogImage: "/images/markdown-og.jpg"
draft: false
---

# H1 — Heading Level 1

## H2 — Heading Level 2

### H3 — Heading Level 3

#### H4 — Heading Level 4

##### H5 — Heading Level 5

###### H6 — Heading Level 6

---

## Paragraph & Inline Formatting

This is a regular paragraph. Lorem ipsum dolor sit amet, **bold text**, *italic text*, ***bold and italic***, ~~strikethrough~~, and `inline code`.

You can also do [a link](https://astro.build) or [an external link with title](https://astro.build "Astro framework").

This is a second paragraph with a <br /> manual line break followed by more text.

---

## Blockquotes

> This is a simple blockquote.

> **Nested blockquote starts here.**
>
> > This is nested one level deep.
> >
> > > And nested two levels deep.
>
> Back to the outer blockquote.

> [!NOTE]
> This is a GitHub-style admonition / callout block.

---

## Lists

### Unordered List

- Item one
- Item two
  - Nested item A
  - Nested item B
    - Deeply nested item
- Item three

### Ordered List

1. First item
2. Second item
   1. Sub-item 2.1
   2. Sub-item 2.2
3. Third item

### Task List (GFM)

- [x] Write the markdown post
- [x] Add code blocks
- [ ] Add a video embed
- [ ] Publish to production

---

## Code

### Inline Code

Use `console.log()` for quick debugging, or `process.env.NODE_ENV` to check the environment.

### Fenced Code Block — JavaScript

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

### Fenced Code Block — TypeScript

```ts
interface User {
  id: number;
  name: string;
  email?: string;
}

const getUser = async (id: number): Promise<User> => {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error("User not found");
  return res.json();
};
```

### Fenced Code Block — Bash

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```

### Fenced Code Block with Filename / Title

```json title="tsconfig.json"
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Diff Block

```diff
- const old = "remove this line";
+ const newLine = "add this line";
  const unchanged = "this line stays";
```

---

## Tables

| Column A | Column B   | Column C |
| -------- | ---------- | -------- |
| Cell 1   | Cell 2     | Cell 3   |
| Cell 4   | **Bold**   | `code`   |
| Cell 7   | *Italic*   | [Link](https://astro.build) |

### Aligned Table

| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| Left         | Center         | Right         |
| Data         | Data           | 1,000         |
| Data         | Data           | 99,999        |

---

## Images

![A placeholder image](https://placehold.co/800x400 "Optional title text")

Image with a reference link:

![Alt text][logo]

[logo]: https://placehold.co/200x100 "Logo placeholder"

---

## Horizontal Rule

Three ways to create a horizontal rule:

---

***

___

---

## Footnotes

Here is a sentence with a footnote.[^1]

Another sentence references a named footnote.[^note]

[^1]: This is the first footnote content.
[^note]: This is the named footnote — it can contain **formatting** and `code`.

---

## HTML in Markdown

<details>
  <summary>Click to expand a hidden section</summary>

  This content is hidden by default and revealed on click. You can put **markdown** inside HTML blocks in most processors.

  ```js
  console.log("Hidden code block!");
  ```
</details>

<kbd>Ctrl</kbd> + <kbd>C</kbd> to copy, <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste.

---

## Definition List (extended syntax)

Term 1
: Definition for term 1.

Term 2
: Definition for term 2, first paragraph.
: Definition for term 2, second paragraph.

---

## Emoji (GFM)

:rocket: :tada: :sparkles: :white_check_mark: :x:

---

## Math (if supported)

Inline math: $E = mc^2$

Block math:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
