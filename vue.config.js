const webpack = require('webpack');

module.exports = {
  configureWebpack: (config) => {
  },
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: "http://127.0.0.1:3000"
  }
};


