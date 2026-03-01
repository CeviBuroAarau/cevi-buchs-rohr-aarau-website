# Technical Debt & Known Issues

## ESLint ecosystem upgrade (deferred)

**Current state:** Only `eslint` itself was upgraded to v8. The rest of the ESLint
ecosystem is intentionally held back:

| Package | Current | Latest | Blocked by |
|---------|---------|--------|-----------|
| `@typescript-eslint/eslint-plugin` | 6.21.0 | 8.x | See below |
| `@typescript-eslint/parser` | 6.21.0 | 8.x | See below |
| `eslint-plugin-vue` | 9.33.0 | 10.x | See below |
| `@vue/eslint-config-typescript` | 12.0.0 | 13.x | See below |

**Blockers:**

1. `eslint-plugin-vue@10.7+` switched to rolldown bundling, which wraps config objects
   in a `{ default: {...} }` wrapper. ESLint 8's legacy `.eslintrc.js` loader rejects
   this with `"Unexpected top-level property 'default'"`. The last working version is
   `10.6.2`, but that version also renames `plugin:vue/vue3-essential` to
   `plugin:vue/essential`.

2. `@typescript-eslint@8` changed the AST shape for enums: `TSEnumDeclaration.members`
   moved to `TSEnumDeclaration.body.members`. Linting `src/types/Common.ts` (which
   contains an enum) crashes with `Cannot read properties of undefined (reading 'members')`.

**Recommended path forward:** Migrate to ESLint 9 flat config (`eslint.config.js`).
All plugins have dropped or are dropping support for the legacy `.eslintrc.js` format.
Steps:
1. Replace `.eslintrc.js` with `eslint.config.js` (ESLint 9 flat config format)
2. Upgrade `eslint` 8 → 9, `@typescript-eslint` 6 → 8, `eslint-plugin-vue` 9 → 10,
   `@vue/eslint-config-typescript` 12 → 13

---

## Jest / @vue/cli-plugin-unit-jest compatibility shims

`@vue/cli-plugin-unit-jest@5.0.9` targets Jest 27 and is no longer maintained. Running
Jest 29 requires several workarounds that are fragile against future dependency changes:

1. **`resolutions` block in `package.json`** forces 8 Jest sub-packages to v29.7.0 to
   prevent them being shadowed by the v27 versions hoisted by the CLI plugin. `jest-worker`
   is deliberately excluded because webpack plugins (`terser-webpack-plugin`,
   `css-minimizer-webpack-plugin`) require `jest-worker@^27.x`.

2. **`moduleNameMapper` overrides in `jest.config.js`:**
   - `@vue/test-utils` → `vue-test-utils.cjs.js` (prevents jsdom from loading the browser
     bundle which references the Vue 2 global `window.Vue`)
   - `jspdf` → `jspdf.umd.min.js` (jsPDF 4's conditional exports point to an ES module
     under the `browser` condition and a Node bundle under the `node` condition; neither
     works directly in Jest's CJS environment)
   - `perfect-debounce` → `tests/unit/mocks/perfect-debounce.js` (transitive dep of
     vue-router 5 via `@vue/devtools-kit`; ships only an ESM build; mock provides a
     passthrough `debounce` function sufficient for the test environment)

3. **`tests/unit/setup.js`** polyfills `TextEncoder`/`TextDecoder` into the jsdom global
   scope (jsPDF 4's UMD bundle requires them; jsdom sandboxes globals so the Node.js
   built-ins are not visible to module-level code).

**Recommended path forward:** Migrate away from `@vue/cli-service` / `@vue/cli-plugin-*`
to Vite + `vitest`. This removes the entire class of Jest-vs-webpack-plugin version
conflicts and eliminates the need for all three shims above.
