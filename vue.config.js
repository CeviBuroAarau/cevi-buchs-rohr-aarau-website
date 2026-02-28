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
    loaderOptions: {
      sass: {
        sassOptions: {
          silenceDeprecations: [
            "import",
            "global-builtin",
            "color-functions",
            "mixed-decls",
          ],
        },
      },
      scss: {
        sassOptions: {
          silenceDeprecations: [
            "import",
            "global-builtin",
            "color-functions",
            "mixed-decls",
          ],
        },
      },
    },
  },
};
