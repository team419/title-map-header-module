const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.js'),
  module: {
    rules: [
      {
        test: [/\.js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[sha1:hash:hex:7]',
            },
          },
        ],
      },
      {
        test: /\.(png)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist'),
  },
};
