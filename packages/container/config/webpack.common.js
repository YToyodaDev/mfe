const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        // tell babel to process .mjs, .js files
        test: /\.m?js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            // 1. To process JSX tags, 2. To convert ES 2015,6, 7,etc..  down to ES5
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // 3. enable some  features inside the browser such as, async/await
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
