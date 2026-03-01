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

## ~~Jest / @vue/cli-plugin-unit-jest compatibility shims~~ (resolved)

**Resolved:** Migrated from `@vue/cli-service` / webpack / Jest to **Vite 7 + Vitest 4**.
All shims, `resolutions` blocks, and `moduleNameMapper` overrides have been removed.

The migration also eliminated the dependency on `@vue/cli-plugin-e2e-nightwatch` for
Nightwatch configuration. Nightwatch is now configured directly via `nightwatch.conf.js`.
