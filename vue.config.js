"use strict";

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devServer: {
    port: 8080,
  },
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
}
};
