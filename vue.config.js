
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
  publicPath: process.env.NODE_ENV === "production" ? "/my-vue-app/" : "/",
};

