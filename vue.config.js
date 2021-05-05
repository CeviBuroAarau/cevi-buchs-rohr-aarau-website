"use strict";

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// eslint-disable-next-line
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
  // eslint-disable-next-line
  configureWebpack: (config) => {
    if (
      process.env.NODE_ENV === "production" &&
      process.env.SENTRY_AUTH_TOKEN !== "Not specified"
    ) {
      return {
        plugins: [
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
          }),
          new SentryWebpackPlugin({
            // sentry-cli configuration
            authToken: process.env.SENTRY_AUTH_TOKEN,
            org: process.env.SENTRY_ORG,
            project: process.env.SENTRY_PROJECT,
            release: process.env.VUE_APP_VERSION,

            // webpack specific configuration
            include: "./dist",
            ignore: ["node_modules", "webpack.config.js"],
          }),
        ],
        devtool: "source-map",
      };
    } else {
      return {
        plugins: [
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
          }),
        ],
        devtool: "source-map",
      };
    }
  },
  integrity: true,
  css: {
    sourceMap: true,
  },
};
