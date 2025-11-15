"use strict";

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
    return {
      plugins: [],
      devtool: "source-map",
    };
  },

  integrity: true,

  css: {
    sourceMap: true,
  },
};
