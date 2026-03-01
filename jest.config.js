module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{vue,ts,js}", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      branches: 5,
      functions: 25,
      lines: 25,
    },
  },
  testResultsProcessor: "jest-sonar-reporter",
  setupFiles: ["jest-canvas-mock", "<rootDir>/tests/unit/setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.tsx?$": ["ts-jest", { babelConfig: true }],
  },
  moduleNameMapper: {
    "^axios$": "<rootDir>/node_modules/axios/dist/node/axios.cjs",
    "^@vue/test-utils$":
      "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js",
    "^jspdf$": "<rootDir>/node_modules/jspdf/dist/jspdf.umd.min.js",
    "^perfect-debounce$": "<rootDir>/tests/unit/mocks/perfect-debounce.js",
  },
};
