import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    port: 8080,
  },

  optimizeDeps: {
    entries: ["index.html"],
  },

  build: {
    sourcemap: true,
  },

  css: {
    preprocessorOptions: {
      sass: {
        silenceDeprecations: ["import", "global-builtin", "color-functions", "if-function"],
      },
      scss: {
        silenceDeprecations: ["import", "global-builtin", "color-functions", "if-function"],
      },
    },
  },

  test: {
    globals: true,
    exclude: ['node_modules', 'tests/e2e/**'],
    alias: {
      // axios ships an ESM build that Vitest would resolve by default; the CJS
      // build behaves like a CommonJS module and works with vi.mock factories
      // that don't wrap their return value in { default: ... }.
      axios: fileURLToPath(
        new URL("node_modules/axios/dist/node/axios.cjs", import.meta.url),
      ),
    },
    environment: "jsdom",
    environmentOptions: {
      url: "http://localhost/",
    },
    setupFiles: ["./tests/unit/jest-shim.ts", "jest-canvas-mock", "./tests/unit/setup.ts"],
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
    reporters: [
      "default",
      ["vitest-sonar-reporter", { outputFile: "coverage/sonar-test-reporter.xml" }],
    ],
  },
});
