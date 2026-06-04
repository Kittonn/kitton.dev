---
title: "10 TypeScript Tips That Will Level Up Your Code"
description: "Practical TypeScript patterns you can use today — from utility types to discriminated unions and type narrowing."
publishedDate: 2026-03-05
tags: ["typescript", "javascript", "tips", "advanced"]
draft: false
---

# 10 TypeScript Tips That Will Level Up Your Code

TypeScript is more than just adding `: string` after variable names. Here are ten patterns that will make your types both safer and more expressive.

---

## 1. Use `satisfies` Instead of Type Casting

```ts
// ❌ As-casting silences errors
const config = {
  port: "3000", // should be number — no error!
} as { port: number };

// ✅ satisfies validates without widening
const config = {
  port: 3000,
} satisfies { port: number };
```

`satisfies` checks the type **and** preserves the literal type for inference.

---

## 2. Discriminated Unions for State Machines

```ts
type LoadingState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string[] }
  | { status: "error"; message: string };

function render(state: LoadingState) {
  switch (state.status) {
    case "idle":
      return "Click to load";
    case "loading":
      return "Loading...";
    case "success":
      return state.data.join(", "); // TS knows data exists here
    case "error":
      return `Error: ${state.message}`; // TS knows message exists here
  }
}
```

---

## 3. Template Literal Types

```ts
type EventName = "click" | "hover" | "focus";
type Handler = `on${Capitalize<EventName>}`;
// Result: "onClick" | "onHover" | "onFocus"

type CSSProperty = `${string}-${"px" | "rem" | "em" | "%"}`;
```

---

## 4. Infer in Conditional Types

```ts
type UnpackPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnpackPromise<Promise<string>>; // string
type B = UnpackPromise<number>;          // number

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

---

## 5. `const` Type Parameters (TS 5.0+)

```ts
// Without const: T inferred as string[]
function first<T>(arr: T[]): T {
  return arr[0];
}

// With const: T inferred as readonly ["a", "b", "c"]
function firstConst<const T>(arr: T[]): T[0] {
  return arr[0];
}

const result = firstConst(["a", "b", "c"]);
// result: "a" — not string
```

---

## 6. Mapped Types with Remapping

```ts
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

interface User {
  name: string;
  age: number;
}

type UserGetters = Getters<User>;
// { getName: () => string; getAge: () => number }
```

---

## 7. Branded / Nominal Types

```ts
type UserId = string & { readonly __brand: "UserId" };
type PostId = string & { readonly __brand: "PostId" };

function toUserId(id: string): UserId {
  return id as UserId;
}

function fetchUser(id: UserId) { /* ... */ }

const uid = toUserId("abc-123");
const pid = "xyz-456" as PostId;

fetchUser(uid); // ✅
fetchUser(pid); // ❌ Argument of type 'PostId' is not assignable to 'UserId'
```

---

## 8. Use `unknown` Not `any` for External Data

```ts
// ❌ any disables all checks
async function badFetch(url: string): Promise<any> {
  return (await fetch(url)).json();
}

// ✅ unknown forces you to validate
async function safeFetch(url: string): Promise<unknown> {
  return (await fetch(url)).json();
}

const data = await safeFetch("/api/user");
if (typeof data === "object" && data !== null && "name" in data) {
  console.log((data as { name: string }).name);
}
```

---

## 9. Exhaustive Checks with `never`

```ts
function assertNever(x: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(x)}`);
}

type Shape = { kind: "circle"; r: number } | { kind: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.r ** 2;
    case "square":
      return shape.side ** 2;
    default:
      return assertNever(shape); // Error if you add a new Shape but forget this
  }
}
```

---

## 10. Utility Types Cheat Sheet

| Type | Description |
| ---- | ----------- |
| `Partial<T>` | All keys optional |
| `Required<T>` | All keys required |
| `Readonly<T>` | All keys readonly |
| `Pick<T, K>` | Keep only keys K |
| `Omit<T, K>` | Remove keys K |
| `Record<K, V>` | Object with keys K and values V |
| `Exclude<T, U>` | Remove U from union T |
| `Extract<T, U>` | Keep only U from union T |
| `NonNullable<T>` | Remove null & undefined |
| `ReturnType<F>` | Return type of function F |
| `Parameters<F>` | Parameter tuple of function F |
| `Awaited<T>` | Unwrap nested Promise |

---

> **Pro tip:** Run `tsc --noEmit` in CI on every PR. Type errors are compile-time bugs — catch them before they reach production.
