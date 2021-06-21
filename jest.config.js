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
  setupFiles: ["jest-canvas-mock"],
};
