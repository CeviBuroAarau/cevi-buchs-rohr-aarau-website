const path = require("path");

let chromedriverPath;
try {
  chromedriverPath = require("chromedriver").path;
} catch (e) {
  chromedriverPath = "";
}

module.exports = {
  src_folders: ["tests/e2e/specs"],

  page_objects_path: "tests/e2e/page-objects",
  custom_commands_path: "tests/e2e/custom-commands",
  custom_assertions_path: "tests/e2e/custom-assertions",
  globals_path: path.resolve("tests/e2e/globals.js"),

  output_folder: "tests/e2e/reports",

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: "http://localhost:8080",

      screenshots: {
        enabled: false,
        path: "tests/e2e/reports",
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          w3c: true,
          args: ["--headless", "--no-sandbox", "--disable-gpu"],
        },
      },

      webdriver: {
        start_process: true,
        server_path: chromedriverPath,
        port: 9515,
      },
    },
  },
};
