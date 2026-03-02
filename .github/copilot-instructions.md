# Copilot Instructions for Cevi Buchs-Rohr Aarau Website

## Project Overview
This is the official website for Cevi Buchs-Rohr Aarau (https://www.cevi-buro-aarau.ch), a Vue.js 3 single-page application built with TypeScript. It connects to a Cockpit CMS backend API for dynamic content.

**Key Technologies:**
- **Frontend**: Vue 3 with TypeScript 5, Vue Router 5, `defineComponent` Options API
- **Build Tools**: Vite 7, Yarn 1.22
- **Testing**: Vitest 4 (unit), Playwright (E2E with headless Chromium)
- **Linting**: ESLint 10 flat config (`eslint.config.mjs`), Prettier
- **Styling**: Bulma 1.x CSS, SASS/SCSS, FontAwesome 7
- **Runtime**: Node.js 24.x

## Commands

```bash
yarn serve          # Start dev server (Vite, http://localhost:8080)
yarn build          # Production build → dist/
yarn test:unit      # Run Vitest unit tests with coverage
yarn test:e2e       # Run Playwright e2e tests (requires dist/ to be built first)
yarn lint           # ESLint with auto-fix
yarn start          # Run production server (serves dist/ via Express on port 5000)
```

**E2E tests**: `yarn build` must be run first. Playwright starts the production server automatically via `playwright.config.ts` `webServer` config. Install Playwright browser once with `yarn playwright install chromium`.

## Project Structure

### Root Configuration Files
- **`package.json`**: Dependencies and scripts
- **`tsconfig.json`**: TypeScript config, `@/` alias → `src/`
- **`vite.config.ts`**: Vite + Vitest configuration (build, dev server, test settings)
- **`playwright.config.ts`**: Playwright E2E config (Chromium, baseURL, webServer)
- **`eslint.config.mjs`**: ESLint 10 flat config
- **`server.js`**: Express production server with compression and cache headers
- **`.env`**: Environment variables (`VITE_COCKPIT_API`, `VITE_COCKPIT_AUTHORIZATION`, `VITE_COCKPIT_FILES`)

### Source Directory (`src/`)
- **`main.ts`**: App entry point — `createApp`, router, FontAwesome setup
- **`App.vue`**: Root component
- **`assets/`**: Images, SCSS styles (`main.scss`, per-feature subdirs)
- **`components/`**: Reusable Vue components (forms, lists, modals, navigation)
- **`filters/`**: Date formatting filter (`DateFilter.ts`)
- **`layouts/`**: `Front.vue` (homepage), `Regular.vue` (all other pages)
- **`router/index.ts`**: Vue Router 5 with lazy-loaded routes, `createWebHistory`
- **`services/`**: One class per domain entity, each takes an `AxiosInstance`. Re-exported from `services/index.ts`
- **`types/`**: TypeScript interfaces for CMS response shapes and domain models. Re-exported from `types/index.ts`
- **`utils/`**: `AxiosUtil`, `DateUtil`, `HtmlUtil`, `JsPdfUtil`, `AgendaPDFCreator`, `SortingUtil`, `ArrayBufferUtil`

### Test Structure (`tests/`)
- **`unit/`**: Vitest unit tests mirroring `src/` structure (48 files, 109 tests)
- **`e2e/router.spec.ts`**: Playwright tests for all routes

## Common Patterns

### Vue Components
- Use `defineComponent` with Options API style
- `@/` path alias for all internal imports
- 2-space indentation

### Services
- All services receive an `AxiosInstance` in the constructor
- Use `AxiosUtil` to create authenticated Cockpit instances
- Cockpit API: `collections/get/<Name>` for reads, `forms/submit/<name>` for form submissions

### Unit Testing
- Vitest with `globals: true` — no need to import `describe`, `test`, `expect`, `vi`
- Use `shallowMount` from `@vue/test-utils` for component tests
- Mock axios in service tests with a factory returning `{ default: mock, ...mock }`

### API / Environment
- Backend: Cockpit CMS at `VITE_COCKPIT_API`
- All env vars are `VITE_*`, accessed via `import.meta.env.VITE_*`
- API contract documented in `api/Backend.yaml` (OpenAPI 3.1)

## CI/CD

GitHub Actions workflows:
- **`build_branch.yml`**: CI on feature branches — build, unit tests, E2E tests
- **`build_main.yml`**: CI on main — build, unit tests, E2E tests, SonarCloud scan
- **`release.yml`**: Manual workflow (workflow_dispatch) — build, test, push Docker image to ghcr.io, create GitHub Release with auto-generated notes

Common steps:
1. Node 24.x setup with yarn cache
2. `yarn --frozen-lockfile`
3. `yarn build` + `yarn test:unit`
4. `npx playwright install chromium --with-deps` + `yarn test:e2e`
