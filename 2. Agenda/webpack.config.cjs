const path = require('path');

module.exports = {
  mode: 'development',
  entry: './frontend/main.js', // ajusta aqui se seu arquivo de entrada está em frontend/main.js
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,          // regra para JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,         // regra para CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
