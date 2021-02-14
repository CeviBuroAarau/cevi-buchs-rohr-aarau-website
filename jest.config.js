module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  "collectCoverage": true,
  "coverageDirectory": "coverage"
  "collectCoverageFrom": [
    "src/**/*.{vue,ts,js}",
    "!**/node_modules/**"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 25,
      "functions": 25,
      "lines": 25
    }
  }
};
