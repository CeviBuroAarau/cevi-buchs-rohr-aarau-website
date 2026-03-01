# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `yarn` as the package manager (pinned to `yarn@1.22.19`).

```bash
yarn serve          # Start dev server
yarn build          # Production build (outputs to /dist)
yarn test:unit      # Run all unit tests
yarn test:e2e       # Run e2e tests (headless, requires Chrome/geckodriver)
yarn lint           # Lint and auto-fix
yarn start          # Run production server (serves /dist via Express)
```

To run a single unit test file:
```bash
yarn test:unit --testPathPattern="tests/unit/services/AgendaService.spec.ts"
```

## Architecture

### Tech Stack
- **Vue 3** (Composition API via `defineComponent`, Options API style)
- **TypeScript** with strict mode; `@/` alias maps to `src/`
- **Vue Router 4** with lazy-loaded routes
- **Bulma** CSS (imported selectively per layout, not globally)
- **FontAwesome** (registered globally in `main.ts`)
- **Axios** for all API calls to a Cockpit CMS backend
- **jsPDF + jspdf-autotable** for PDF generation (Agenda feature)
- **Leaflet / @vue-leaflet/vue-leaflet** for the map on Standort page
- **Jest + @vue/test-utils v2** for unit tests; **Nightwatch** for e2e

### Application Structure

**Layouts** (`src/layouts/`): Two layouts route all pages:
- `Front.vue` — homepage only (full-screen image carousel)
- `Regular.vue` — all other pages; wraps `HeaderBar` + `Navigation` + `<router-view>`

**Views** (`src/views/`) — page-level components, all lazy-loaded in the router except the home layout.

**Components** (`src/components/`) — shared UI components (`header-bar`, `navigation`, `modal`, reusable list/detail/form components).

**Services** (`src/services/`) — one class per domain entity, each receives an `AxiosInstance` in its constructor. All services are re-exported from `src/services/index.ts`. Services call the Cockpit CMS REST API (`collections/get/<Name>` for reads, `forms/submit/<name>` for form submissions).

**Types** (`src/types/`) — TypeScript interfaces for all CMS response shapes and domain models, re-exported from `src/types/index.ts`. Each file typically exports both a raw `Cockpit*` response type and a mapped domain type.

**Utils** (`src/utils/`):
- `AxiosUtil` — creates authenticated Cockpit axios instances; contains a date-conversion interceptor that parses `date` fields from strings into `Date` objects
- `DateUtil` — date parsing/formatting helpers
- `HtmlUtil` — HTML entity decoding
- `JsPdfUtil` / `AgendaPDFCreator` — PDF generation helpers
- `SortingUtil` — generic ascending/descending comparators
- `ArrayBufferUtil` — binary data helpers

**Filters** (`src/filters/`) — Vue filter helpers (e.g., `DateFilter`).

### Backend / API
The backend is a **Cockpit CMS** instance. The API contract is documented in `api/Backend.yaml` (OpenAPI 3.1). Environment variables required:
- `VUE_APP_COCKPIT_API` — base URL for Cockpit API (e.g., `https://cockpit.cevi-buro-aarau.ch/api`)
- `VUE_APP_COCKPIT_AUTHORIZATION` — Bearer token for Cockpit
- `VUE_APP_COCKPIT_FILES` — base URL for Cockpit file storage

The production static file server is `server.js` (Express): HTML and service-worker files are cache-busted; JS/CSS/images get a 1-year immutable cache (safe because webpack adds chunk hashes to filenames).

### Routing
All routes are defined in `src/router/index.ts`. Most routes use `RegularLayout` as parent with the actual view as a child (empty `path: ""`). The router uses `createWebHistory` and calls `Shynet.newPageLoad()` on every navigation (privacy-friendly analytics).

### Testing Patterns
Unit tests in `tests/unit/` mirror the `src/` structure. Services are tested by mocking `axios` with `jest.mock`. Views are tested via `@vue/test-utils` `shallowMount`. Test coverage reports are written to `coverage/` with a Sonar-compatible reporter.
