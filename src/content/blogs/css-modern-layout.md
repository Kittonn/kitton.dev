---
title: "Modern CSS Layout: Grid, Flexbox, and Container Queries"
description: "A practical deep-dive into CSS Grid, Flexbox, and Container Queries with real-world usage patterns and comparison tables."
publishedDate: 2026-03-20
tags: ["css", "layout", "frontend", "web"]
coverImage: "/images/css-layout-cover.jpg"
draft: false
---

# Modern CSS Layout

CSS layout has come a long way. Let's cover the three pillars of modern layout: **Flexbox**, **Grid**, and the newer **Container Queries**.

---

## Flexbox — One-Dimensional Layout

Flexbox is perfect for laying out items in a **single row or column**.

```css
.nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
}
```

### Key Properties

| Property | Applied to | Effect |
| -------- | ---------- | ------ |
| `display: flex` | Container | Activates flex context |
| `flex-direction` | Container | `row` \| `column` \| `row-reverse` |
| `justify-content` | Container | Main-axis alignment |
| `align-items` | Container | Cross-axis alignment |
| `flex-wrap` | Container | Allow wrapping |
| `gap` | Container | Space between items |
| `flex` | Item | Shorthand for grow/shrink/basis |
| `align-self` | Item | Override align-items for one item |
| `order` | Item | Visual reordering |

### Common Patterns

**Centering anything:**

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**Sticky footer:**

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

main {
  flex: 1; /* grows to fill available space */
}
```

---

## Grid — Two-Dimensional Layout

Grid shines when you need control over **both rows and columns**.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

### Named Template Areas

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
}

.header  { grid-area: header;  }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main;    }
.footer  { grid-area: footer;  }
```

### Placement

```css
/* Span across multiple columns */
.hero {
  grid-column: 1 / -1; /* full width */
}

/* Place at specific row/column */
.featured {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```

---

## Container Queries — Component-Level Responsiveness

> Container queries are like media queries, but instead of reacting to the viewport width, they react to the **parent container's width**.

```css
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}
```

### Why This Matters

Without container queries, a card component placed in a narrow sidebar looks the same as one in a full-width section. With container queries, the card adapts to **where it is placed**, not the viewport size.

---

## Flexbox vs Grid Decision Guide

| Scenario | Use |
| -------- | --- |
| Navigation bar items | Flexbox |
| Page layout (header, sidebar, main) | Grid |
| Button group / icon row | Flexbox |
| Card grid | Grid |
| Form field + label | Flexbox |
| Magazine/editorial layout | Grid |
| Centering a single element | Either |

---

## Practical: Responsive Card Grid

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
}
```

This single rule creates a responsive grid that:
- Fits as many cards per row as possible
- Minimum card width: 300px (or full width if container is narrower)
- Gap scales with viewport width using `clamp()`
- **No media queries needed**

---

## The `subgrid` Value

```css
.parent {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.child {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid; /* inherits parent columns */
}
```

`subgrid` lets nested elements participate in the outer grid's tracks — finally solving the "align nested items across cards" problem.

---

> **Browser support note:** Container queries have ~93% global support (2026). `subgrid` has ~92%. Both are safe to use today with no polyfill needed.
