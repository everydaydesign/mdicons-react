# mdicons-react

[![npm version](https://img.shields.io/npm/v/mdicons-react)](https://www.npmjs.com/package/mdicons-react)
[![license](https://img.shields.io/npm/l/mdicons-react)](./LICENSE)

[Material Design Icons](https://pictogrammers.com/library/mdi/) (~7,600 icons) as **tree-shakeable
React components** with clean named imports.

## Install

```bash
npm install mdicons-react
# pnpm add mdicons-react · yarn add mdicons-react · bun add mdicons-react
```

Requires React 17+ (peer dependency).

## Usage

```tsx
import { Home, History, Delete } from "mdicons-react";

<Home size={20} className="text-blue-500" />;
```

- Named imports from the package root (a generated barrel).
- Native props: `size`, `className`, `color`, all `SVGProps`; `fill="currentColor"`.
- Tree-shakeable: `sideEffects: false` + pure-annotated exports → only imported icons ship.

## How it's built

1. **Source** — `@mdi/svg`, the canonical MDI SVG set.
2. **`npm run generate`** — reads every SVG and writes `src/index.ts`: one
   `export const Name = /*#__PURE__*/ createIcon("<path>")` per icon, sharing `src/createIcon.tsx`.
3. **`npm run build`** — tsup emits ESM + CJS + `.d.ts` to `dist/`.
4. **Publish** — `npm publish` (runs generate + build via `prepublishOnly`).

## Staying current

`.github/workflows/update-icons.yml` runs weekly: bumps `@mdi/svg`, regenerates, and opens a PR if
the icon set changed. Merge to ship.

## License

Code Apache-2.0. MDI icon designs © Pictogrammers, Apache-2.0.
