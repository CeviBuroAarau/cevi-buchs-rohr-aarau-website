# Migration: Vue CLI + Jest → Vite + Vitest

Ziel: `@vue/cli-service` und den gesamten Jest-Workaround-Stack ersetzen durch Vite und Vitest.
Alle Shims aus `jest.config.js` werden überflüssig, da Vitest ESM nativ versteht.

---

## Überblick der Änderungen

| Was | Vorher | Nachher |
|-----|--------|---------|
| Build-Tool | Vue CLI / webpack | Vite |
| Test-Runner | Jest 29 (mit Shims) | Vitest |
| Test-Reporter (Sonar) | jest-sonar-reporter | vitest-sonar-reporter |
| Env-Variablen | `process.env.VUE_APP_*` | `import.meta.env.VITE_*` |
| Konfig-Dateien | `vue.config.js`, `babel.config.js`, `jest.config.js` | `vite.config.ts` |
| E2E-Tests | via `vue-cli-service test:e2e` | direkt via `nightwatch` (separater Scope) |

---

## Phase 1 — Neue Pakete installieren

### Hinzufügen (devDependencies)

```bash
yarn add -D vite @vitejs/plugin-vue vite-plugin-pwa
yarn add -D vitest @vitest/coverage-v8 vitest-sonar-reporter
```

`jsdom` ist in Vitest bereits enthalten, kein separates Paket nötig.

### Entfernen

```bash
# Vue CLI Build-Stack
yarn remove @vue/cli-service @vue/cli-plugin-babel @vue/cli-plugin-eslint
yarn remove @vue/cli-plugin-pwa @vue/cli-plugin-router @vue/cli-plugin-typescript
yarn remove @vue/cli-plugin-unit-jest @vue/compiler-sfc

# Webpack (war fälschlicherweise in dependencies)
yarn remove webpack

# Jest-Stack (alle, inkl. falsch platzierter dependencies-Einträge)
yarn remove jest jest-environment-jsdom jest-sonar-reporter jest-canvas-mock
yarn remove @vue/vue3-jest babel-jest ts-jest

# Babel (nur Vue CLI Preset nötig gewesen)
yarn remove @babel/core

# Nur für webpack gebraucht
yarn remove sass-loader core-js
```

`jest-canvas-mock` bleibt vorerst installiert, da es Vitest-kompatibel ist.

---

## Phase 2 — `vite.config.ts` erstellen

Neue Datei `vite.config.ts` im Projektstamm:

```typescript
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
      },
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    port: 8080,
  },

  build: {
    sourcemap: true,
  },

  css: {
    preprocessorOptions: {
      sass: {
        silenceDeprecations: [
          "import",
          "global-builtin",
          "color-functions",
          "mixed-decls",
        ],
      },
      scss: {
        silenceDeprecations: [
          "import",
          "global-builtin",
          "color-functions",
          "mixed-decls",
        ],
      },
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    environmentOptions: {
      url: "http://localhost/",
    },
    setupFiles: ["jest-canvas-mock", "./tests/unit/setup.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{vue,ts,js}"],
      reporter: ["lcov", "text"],
      thresholds: {
        branches: 5,
        functions: 25,
        lines: 25,
      },
    },
    reporters: ["default", "vitest-sonar-reporter"],
    outputFile: {
      "vitest-sonar-reporter": "coverage/sonar-test-reporter.xml",
    },
  },
});
```

**Hinweis SRI (`integrity: true`):** `vue.config.js` hatte `integrity: true` für Subresource Integrity.
Vite hat dafür keine eingebaute Option. Falls SRI benötigt wird, `vite-plugin-sri3` evaluieren.
Für den ersten Schritt weglassen und separat nachziehen.

---

## Phase 3 — `index.html` anpassen und verschieben

Vite erwartet `index.html` im **Projektstamm** (nicht in `public/`).

1. `public/index.html` → `index.html` verschieben
2. Den Vue CLI Template-Tag `<%= BASE_URL %>` und den Kommentar ersetzen,
   stattdessen den Einstiegspunkt als `<script>`-Tag einfügen:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico">
    <title>Cevi Buro Aarau</title>
    <script src="https://statistics.cevi-buro-aarau.ch/ingress/ed9d888b-c441-4ea6-b268-1a60da6f9175/script.js" referrerpolicy="origin"></script>
  </head>
  <body>
    <noscript>
      <strong>Die Webseite funktioniert nicht mit deaktiviertem JavaScript.</strong>
      <img src="https://statistics.cevi-buro-aarau.ch/ingress/ed9d888b-c441-4ea6-b268-1a60da6f9175/pixel.gif">
    </noscript>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

Statische Assets im `public/`-Ordner (favicon, robots.txt usw.) bleiben unverändert dort.

---

## Phase 4 — Umgebungsvariablen umbenennen

Vite verwendet das Präfix `VITE_` statt `VUE_APP_`.

### `.env`
```diff
-VUE_APP_COCKPIT_FILES=https://cockpit.cevi-buro-aarau.ch/
-VUE_APP_COCKPIT_API=https://cockpit.cevi-buro-aarau.ch/api/
-VUE_APP_COCKPIT_AUTHORIZATION=486f18ebe895de87c4f35c58d3db0f
-VUE_APP_VERSION=Not specified
-VUE_APP_REVISION=Not specified
-VUE_APP_DATE=Not specified
+VITE_COCKPIT_FILES=https://cockpit.cevi-buro-aarau.ch/
+VITE_COCKPIT_API=https://cockpit.cevi-buro-aarau.ch/api/
+VITE_COCKPIT_AUTHORIZATION=486f18ebe895de87c4f35c58d3db0f
+VITE_VERSION=Not specified
+VITE_REVISION=Not specified
+VITE_DATE=Not specified
```

### Alle `process.env.VUE_APP_*` im Quellcode

Betroffene Dateien (8 in `src/`, 4 in `tests/`):
- `src/utils/AxiosUtil.ts` — `COCKPIT_API`, `COCKPIT_AUTHORIZATION`
- `src/services/AlbumService.ts`, `ActivitiesService.ts`, `MediaService.ts`,
  `WelcomeImageService.ts`, `ShopService.ts`, `LeaderService.ts` — `COCKPIT_FILES`
- `src/views/Version.vue` — `VERSION`, `DATE`, `REVISION`
- `tests/unit/components/article-list.spec.ts`, `leiter-detail.spec.ts`,
  `leiter-list.spec.ts`, `tests/unit/services/WelcomeImageService.spec.ts`

Ersetzen-Muster:
```diff
-process.env.VUE_APP_COCKPIT_API
+import.meta.env.VITE_COCKPIT_API
```

(Analog für alle anderen Variablen.)

### TypeScript: `import.meta.env` typisieren

In `src/env.d.ts` (neu anlegen) oder in `shims-vue.d.ts` ergänzen:
```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COCKPIT_API: string;
  readonly VITE_COCKPIT_AUTHORIZATION: string;
  readonly VITE_COCKPIT_FILES: string;
  readonly VITE_VERSION: string;
  readonly VITE_REVISION: string;
  readonly VITE_DATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

### CI/CD-Workflows

`.github/workflows/build_main.yml` und `build_and_deploy_azure.yml` verwenden `sed`
um Werte in `.env` zu setzen:

```diff
-sed -i 's#VUE_APP_DATE=Not specified#VUE_APP_DATE=...#g' .env
-sed -i 's#VUE_APP_REVISION=Not specified#VUE_APP_REVISION=...#g' .env
+sed -i 's#VITE_DATE=Not specified#VITE_DATE=...#g' .env
+sed -i 's#VITE_REVISION=Not specified#VITE_REVISION=...#g' .env
```

Der Schritt "Archive report" archiviert `dist/report.html` (webpack-bundle-analyzer).
Vite erzeugt diese Datei nicht. Entweder den Schritt entfernen, oder
`rollup-plugin-visualizer` installieren und in `vite.config.ts` einbinden.

---

## Phase 5 — Quelldateien anpassen

### `src/main.ts`
```diff
-require("./assets/main.scss");
+import "./assets/main.scss";
```

### `src/router/index.ts`
```diff
-history: createWebHistory(process.env.BASE_URL),
+history: createWebHistory(import.meta.env.BASE_URL),
```

### `src/registerServiceWorker.ts`
```diff
-if (process.env.NODE_ENV === "production") {
+if (import.meta.env.PROD) {
```

(Vite stellt `import.meta.env.PROD` / `import.meta.env.DEV` bereit.)

---

## Phase 6 — `tsconfig.json` aktualisieren

```diff
-"types": ["webpack-env", "jest"],
+"types": ["vite/client", "vitest/globals"],
```

`"moduleResolution": "node"` kann auf `"bundler"` geändert werden (empfohlen für Vite + TS 5),
ist aber nicht zwingend nötig.

---

## Phase 7 — `package.json` aktualisieren

### Scripts
```diff
-"serve": "vue-cli-service serve",
-"build": "vue-cli-service build",
-"test:unit": "vue-cli-service test:unit",
-"test:e2e": "vue-cli-service test:e2e --headless",
-"lint": "vue-cli-service lint",
+"serve": "vite",
+"build": "vite build",
+"test:unit": "vitest run --coverage",
+"test:e2e": "nightwatch --headless",
+"lint": "eslint src tests --ext .ts,.vue --fix",
```

### `resolutions`-Block entfernen
Der gesamte Block kann weg — er war nur nötig, um Jest-Sub-Packages zu forcieren.

### `jestSonar`-Config-Block entfernen
Wird nicht mehr gebraucht (war Konfiguration für `jest-sonar-reporter`).

---

## Phase 8 — Test-Setup-Datei anpassen

`tests/unit/setup.js` → `tests/unit/setup.ts` umbenennen:

```typescript
import { TextDecoder, TextEncoder } from "util";
Object.assign(global, { TextDecoder, TextEncoder });
```

**`perfect-debounce`-Mock:** Mit Vitest (ESM-native) wird das Package direkt geladen —
der Mock unter `tests/unit/mocks/perfect-debounce.js` sollte überflüssig sein.
Nach der Migration testen und bei Bedarf als Vitest-Alias wieder einbinden:
```typescript
// in vite.config.ts → test.alias:
{ "perfect-debounce": "./tests/unit/mocks/perfect-debounce.js" }
```

---

## Phase 9 — ESLint anpassen

### `.eslintrc.js`
```diff
-env: { jest: true },
+env: { "vitest/globals": true },
```

Alternativ (sauberer): `eslint-plugin-vitest` installieren und als Plugin einbinden.

---

## Phase 10 — Alte Konfig-Dateien löschen

```
vue.config.js
babel.config.js
jest.config.js
```

---

## Phase 11 — Verifizierung

```bash
yarn serve          # Dev-Server startet auf :8080
yarn build          # dist/ wird erzeugt, keine TS-Fehler
yarn test:unit      # Alle Unit-Tests grün, Coverage-Bericht in coverage/
yarn lint           # Keine ESLint-Fehler
```

Sonar-Bericht prüfen: `coverage/sonar-test-reporter.xml` sollte erzeugt werden.
Pfad-Korrektur in CI gegebenenfalls anpassen (aktuell wird `sonar-test-reporter.xml` erwartet —
Dateiname ist identisch, kein Änderungsbedarf im Workflow).

---

## E2E-Tests (separater Scope)

`@vue/cli-plugin-e2e-nightwatch` wrapped nightwatch in `vue-cli-service`.
Nach dem Entfernen von vue-cli-service muss nightwatch direkt aufgerufen werden.
Die Nightwatch-Konfiguration (`nightwatch.config.js` oder `nightwatch.json`) und die
Testdateien in `tests/e2e/` bleiben unverändert — nur der Aufruf ändert sich
(bereits in Phase 7 abgedeckt: `nightwatch --headless`).
Das ist ein kleiner Eingriff und kann parallel oder direkt danach gemacht werden.