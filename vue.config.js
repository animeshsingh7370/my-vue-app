const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://sv6yuqrxwe.execute-api.us-east-2.amazonaws.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/my-vue-app/" : "/",
};
