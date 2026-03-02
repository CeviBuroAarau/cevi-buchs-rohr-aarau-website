# Technical Debt & Known Issues

## ~~ESLint ecosystem upgrade~~ (resolved)

**Resolved:** Migrated to ESLint 9 flat config (`eslint.config.mjs`).

The legacy `.eslintrc.js` and `.eslintignore` were deleted and replaced with a single
`eslint.config.mjs` using the flat config format. The following packages were updated:

- `eslint`: 8 → 9
- `typescript-eslint`: ^8 (new unified package, replaces `@typescript-eslint/eslint-plugin` + `@typescript-eslint/parser`)
- `eslint-plugin-vue`: 9 → 10 (now uses `flat/essential` config)
- Removed: `@vue/eslint-config-typescript`, `@vue/eslint-config-prettier`
- Added: `@eslint/js` ^9 (for `js.configs.recommended` in flat config)

---

## ~~Jest / @vue/cli-plugin-unit-jest compatibility shims~~ (resolved)

**Resolved:** Migrated from `@vue/cli-service` / webpack / Jest to **Vite 7 + Vitest 4**.
All shims, `resolutions` blocks, and `moduleNameMapper` overrides have been removed.

The migration also eliminated the dependency on `@vue/cli-plugin-e2e-nightwatch` for
Nightwatch configuration. Nightwatch is now configured directly via `nightwatch.conf.js`.
