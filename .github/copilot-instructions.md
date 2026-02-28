# Copilot Instructions for Cevi Buchs-Rohr Aarau Website

## Project Overview
This is the official website for Cevi Buchs-Rohr Aarau (https://www.cevi-buro-aarau.ch), a Vue.js 3 single-page application built with TypeScript. The project uses Vue CLI, Bulma CSS framework, and connects to a Cockpit CMS backend API for dynamic content.

**Key Technologies:**
- **Frontend**: Vue.js 3.2 with TypeScript 4.9, Vue Router 4, `defineComponent` Options API
- **Build Tools**: Vue CLI 5.0, Webpack 5, Yarn 1.22
- **Testing**: Jest 27 (unit, with `@vue/vue3-jest` transform), Nightwatch (E2E with headless Chrome)
- **Styling**: Bulma CSS framework, SASS/SCSS, FontAwesome 6
- **Runtime**: Node.js 22.x (versions > 22 NOT supported)
- **Containerization**: Docker with nginx for production deployment

## Build and Development Commands

### Initial Setup
```bash
nvm use 22              # Switch to Node.js 22 (REQUIRED)
yarn install            # Install dependencies with frozen lockfile
```

**Always run `yarn install` before any other command** if node_modules is missing or after pulling changes.

### Development Server
```bash
yarn serve              # Starts dev server on http://localhost:8080
```

### Building
```bash
yarn build              # Production build → outputs to dist/ (takes ~25 seconds)
```
The build creates optimized chunks with webpack hashing for cache-busting.

### Linting
```bash
yarn lint               # Run ESLint with auto-fix (takes ~5 seconds)
```

### Testing

**Unit Tests:**
```bash
yarn test:unit          # Run Jest tests with coverage (takes ~30 seconds)
```
- Coverage reports generated in `coverage/` directory
- Minimum coverage: branches 5%, functions 25%, lines 25%
- Uses jest-sonar-reporter for SonarCloud integration

**E2E Tests:**
```bash
yarn test:e2e           # Run Nightwatch tests in headless Chrome
```
- Chrome must be installed on the system
- Test reports saved to `tests/e2e/reports/`
- Dev server must NOT be running (or specify different port)

### Pre-commit Hook
The husky pre-commit hook automatically runs:
1. `yarn lint` - ESLint validation
2. YAML validation for all workflow files
3. `yarn test:unit` - Full unit test suite
4. Yarn lock file sanitization (replaces npm.uhlme.ch with registry.yarnpkg.com)

**Note**: E2E tests are commented out in pre-commit due to Chrome version mismatch issues.

## CI/CD Pipeline

### GitHub Actions Workflows

**Build Branch Workflow** (all branches except main):
1. Setup Node.js 22.x with yarn cache
2. `yarn --frozen-lockfile` (ALWAYS use frozen lockfile in CI)
3. `yarn run build`
4. `yarn test:unit` with coverage artifact upload
5. Setup Chrome and run `yarn test:e2e`

**Build Main Workflow** (main branch + monthly schedule):
- All steps from branch workflow, PLUS:
- SonarCloud code quality analysis
- Docker image build and push to GitHub Container Registry (ghcr.io)
- Version tracking via env variables (VUE_APP_DATE, VUE_APP_REVISION)

**Key CI Requirements:**
- Always use `yarn --frozen-lockfile` (never `yarn install` alone)
- Coverage paths need sed replacement for SonarCloud compatibility
- Chrome browser setup required for E2E tests

## Project Structure

### Root Configuration Files
- **package.json**: Dependencies and scripts
- **tsconfig.json**: TypeScript config, paths alias `@/` → `src/`
- **vue.config.js**: Vue CLI config, dev server port 8080, source maps enabled
- **jest.config.js**: Jest preset for TypeScript/Babel, coverage thresholds, uses `@vue/vue3-jest` for `.vue` file transforms
- **babel.config.js**: Babel config with Vue preset
- **nightwatch.json**: Nightwatch E2E config with headless Chrome
- **.eslintrc.js**: ESLint with Vue 3 (`plugin:vue/vue3-essential`), TypeScript, Prettier integration
- **.eslintignore**: Excludes server.js and tests/e2e/
- **.editorconfig**: 2-space indentation, LF line endings
- **.browserslistrc**: Browser support targets
- **.env**: Environment variables (VUE_APP_COCKPIT_API, VUE_APP_COCKPIT_AUTHORIZATION)
- **Dockerfile**: Multi-stage build (Node 22 alpine → nginx stable-alpine)
- **server.js**: Express server for production with compression and cache headers

### Source Directory Structure (`src/`)

**Main Files:**
- `main.ts`: App entry point, Vue 3 `createApp` initialization, FontAwesome setup
- `App.vue`: Root component with print-specific CSS
- `registerServiceWorker.ts`: PWA service worker registration

**Directories:**
- `assets/`: Images, SCSS styles (main.scss, home/, navigation/, standort/)
- `components/`: Reusable Vue components (12 files including forms, lists, modals)
- `filters/`: Date formatting filter (DateFilter.ts)
- `layouts/`: Front.vue (homepage layout), Regular.vue (content pages)
- `router/`: index.ts with Vue Router 4 configuration (`createRouter`/`createWebHistory`), lazy-loaded routes
- `services/`: API service layer (9 services for Activities, Agenda, Album, Leaders, Media, Shop, etc.)
- `types/`: TypeScript interfaces and type definitions (8 type files)
- `utils/`: Helper utilities (ArrayBuffer, Axios, Date, HTML, JsPDF, Sorting)
- `views/`: Page components (17 view files including Agenda, Album, Kontakt, etc.)

### Test Structure (`tests/`)
- `unit/`: Jest unit tests (47 test suites, 103 tests)
  - Mirror structure of src/ with `.spec.ts` files
  - Use `@vue/test-utils` for component testing
  - Tests include shallowMount with service mocks
- `e2e/`: Nightwatch E2E tests
  - `specs/router.js`: Tests navigation to all main routes

### API Integration
- Backend API spec: `api/Backend.yaml` (OpenAPI 3.1)
- Production API: https://cockpit.cevi-buro-aarau.ch/api/
- Mock API for offline dev: `docker run --init --rm -v $(pwd):/tmp -p 4010:4010 stoplight/prism:4 mock -h 0.0.0.0 "/tmp/api/Backend.yaml"`

## Common Patterns and Conventions

### Vue Component Structure
- Use `defineComponent` from Vue 3 with the Options API
- Props defined via the `props` option object with type and default values
- Events declared via the `emits` option
- 2-space indentation (enforced by EditorConfig)

### Testing Patterns
- Unit tests mock services and external dependencies
- Use `@vue/test-utils` v2 (Vue 3 compatible) with `shallowMount` to isolate component testing
- E2E tests use Nightwatch browser automation
- Snapshot testing enabled for UI regression testing

### Code Style
- ESLint enforces code quality (Vue, TypeScript, Prettier rules)
- Prettier for code formatting (2-space indent)
- no-console and no-debugger are warnings in production
- TypeScript strict mode enabled
- `any` type allowed in test files only

### Path Aliases
- `@/` resolves to `src/` directory (configured in tsconfig.json and webpack)
- Always use path alias for imports: `import X from '@/components/X.vue'`

## Validation and Quality Checks

### Before Committing
The pre-commit hook runs automatically, but you can run manually:
```bash
yarn lint                    # Fix linting issues
yarn test:unit              # Ensure tests pass
```

### SonarCloud Integration
- Coverage reports: `coverage/lcov.info` and `coverage/sonar-test-reporter.xml`
- Project key: `cevi-buchs-rohr-aarau-website`
- Source directory: `./src`

## Troubleshooting

### Common Issues
1. **Node version mismatch**: Always use Node 22.x via `nvm use 22`
2. **Build failures**: Run `yarn install` first, ensure all dependencies are installed
3. **Test failures**: Check Chrome/chromedriver version compatibility for E2E tests
4. **Port conflicts**: Default dev server port is 8080, ensure it's not in use
5. **Environment variables**: The .env file contains a public token (intentional - public data)

### Docker Development
```bash
# Build local image
docker build -t cevi-buchs-rohr-aarau-website:latest .

# Run container
docker run -it -p 8080:80 --rm cevi-buchs-rohr-aarau-website:latest
```

## Agent Instructions

**Trust these instructions first.** Only perform searches or exploration if:
- The information here is incomplete or unclear
- You encounter errors not documented here
- You need specific implementation details of a component

**When making changes:**
1. Run `yarn install` if dependencies changed
2. Run `yarn lint` to check code style
3. Run `yarn test:unit` to verify tests pass
4. Update tests if you modify component behavior
5. Follow existing patterns in similar components
6. Use path alias `@/` for imports
7. Respect version constraints - DO NOT upgrade pinned dependencies

**When adding new features:**
- Add corresponding unit tests in `tests/unit/`
- Follow `defineComponent` Options API pattern with TypeScript
- Use existing service layer for API calls
- Add new routes to `src/router/index.ts` with lazy loading
- Update types in `src/types/` if needed










