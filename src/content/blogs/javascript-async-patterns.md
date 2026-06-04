---
title: "JavaScript Async Patterns: Callbacks to Async/Await"
description: "The evolution of async JavaScript — from callback hell through Promises to async/await and beyond, with practical error handling patterns."
publishedDate: 2026-04-02
tags: ["javascript", "async", "promises", "tutorial"]
draft: false
---

# JavaScript Async Patterns

JavaScript is single-threaded but handles async operations through the event loop. This post traces the evolution of async patterns from the early days to modern best practices.

---

## 1. Callbacks (The Old Way)

```js
fs.readFile("./data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Read failed:", err);
    return;
  }

  JSON.parse(data, (parseErr, obj) => { // imaginary async parse
    if (parseErr) {
      console.error("Parse failed:", parseErr);
      return;
    }
    processData(obj, (processErr, result) => {
      if (processErr) {
        console.error("Process failed:", processErr);
        return;
      }
      console.log("Done:", result);
    });
  });
});
```

> This is **callback hell** — deeply nested, hard to read, error handling duplicated at every level.

---

## 2. Promises

```js
fetch("/api/user/1")
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then((user) => {
    return fetch(`/api/posts?userId=${user.id}`);
  })
  .then((res) => res.json())
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((err) => {
    console.error("Something failed:", err);
  })
  .finally(() => {
    console.log("Request complete");
  });
```

Better! But chaining gets awkward with conditional logic.

---

## 3. Async / Await

```js
async function getUserPosts(userId) {
  try {
    const userRes = await fetch(`/api/user/${userId}`);
    if (!userRes.ok) throw new Error(`HTTP ${userRes.status}`);
    const user = await userRes.json();

    const postsRes = await fetch(`/api/posts?userId=${user.id}`);
    const posts = await postsRes.json();

    return posts;
  } catch (err) {
    console.error("Failed:", err);
    throw err; // re-throw so callers know it failed
  }
}
```

Reads like synchronous code. ✅

---

## 4. Running Promises in Parallel

### Sequential (slow)

```js
// These run one after the other — total time = A + B + C
const a = await fetchA();
const b = await fetchB();
const c = await fetchC();
```

### Parallel (fast)

```js
// All three start simultaneously — total time = max(A, B, C)
const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);
```

### Handling Partial Failures

```js
const results = await Promise.allSettled([fetchA(), fetchB(), fetchC()]);

for (const result of results) {
  if (result.status === "fulfilled") {
    console.log("Value:", result.value);
  } else {
    console.error("Rejected:", result.reason);
  }
}
```

| Method | Behavior on failure |
| ------ | ------------------- |
| `Promise.all` | Rejects immediately when any promise rejects |
| `Promise.allSettled` | Always resolves; reports each outcome |
| `Promise.race` | Resolves/rejects with the first settled promise |
| `Promise.any` | Resolves with the first fulfilled; rejects only if all fail |

---

## 5. Async Generators & Streaming

```js
async function* paginate(url) {
  let page = 1;
  while (true) {
    const res = await fetch(`${url}?page=${page}`);
    const { data, hasMore } = await res.json();
    yield data;
    if (!hasMore) break;
    page++;
  }
}

for await (const page of paginate("/api/items")) {
  console.log("Page data:", page);
}
```

---

## 6. AbortController — Cancellation

```js
const controller = new AbortController();
const { signal } = controller;

// Cancel after 5 seconds
const timeout = setTimeout(() => controller.abort(), 5000);

try {
  const res = await fetch("/api/slow-endpoint", { signal });
  const data = await res.json();
  clearTimeout(timeout);
  return data;
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Request was cancelled");
  } else {
    throw err;
  }
}
```

---

## 7. Error Handling Patterns

### Result Type (no-throw pattern)

```js
async function safeAsync(promise) {
  try {
    const data = await promise;
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

const [err, user] = await safeAsync(fetchUser(1));
if (err) {
  console.error("Failed:", err.message);
} else {
  console.log("User:", user);
}
```

### Retry with Exponential Backoff

```js
async function withRetry(fn, { retries = 3, baseDelay = 300 } = {}) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === retries) throw err;
      const delay = baseDelay * 2 ** attempt;
      await new Promise((r) => setTimeout(r, delay));
    }
  }
}

const data = await withRetry(() => fetch("/api/unstable").then((r) => r.json()));
```

---

## Summary

- [x] Use `async/await` for sequential async logic — it's the most readable
- [x] Use `Promise.all` to run independent operations in parallel
- [x] Use `Promise.allSettled` when partial failure is acceptable
- [x] Use `AbortController` for cancellable requests (navigation, timeouts)
- [x] Prefer explicit error handling over letting errors bubble silently
- [ ] Explore async iterators for streaming large datasets
