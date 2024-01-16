const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            const paths = url.pathname.split('/');

            return url.href.startsWith('https://restaurant-api.dicoding.dev') && paths[1] !== 'images';
          },
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'dicoding-restaurant-api'
          }
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/large'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'dicoding-restaurant-image-api'
          }
        }
      ]
    })
  ]
});
