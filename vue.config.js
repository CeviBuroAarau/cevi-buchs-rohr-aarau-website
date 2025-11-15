"use strict";

const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },

  devServer: {
    port: 8080,
  },

  configureWebpack: () => {
    const isProd = process.env.NODE_ENV === "production";
    const hasAuthToken =
      process.env.SENTRY_AUTH_TOKEN &&
      process.env.SENTRY_AUTH_TOKEN !== "Not specified";

    const plugins = [];

    if (isProd && hasAuthToken) {
      plugins.push(
        new SentryWebpackPlugin({
          authToken: process.env.SENTRY_AUTH_TOKEN,
          org: process.env.SENTRY_ORG,
          project: process.env.SENTRY_PROJECT,
          release: process.env.VUE_APP_VERSION,

          include: "./dist",
          ignore: ["node_modules", "webpack.config.js"],

          urlPrefix: "~/",
          cleanArtifacts: true,
        })
      );
    }

    return {
      plugins,
      devtool: "source-map",
    };
  },

  integrity: true,

  css: {
    sourceMap: true,
  },
};
