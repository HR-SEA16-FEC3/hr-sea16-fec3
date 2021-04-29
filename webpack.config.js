const path = require('path');
const entryDir = path.resolve(__dirname, 'client', 'index.jsx');
const outputDir = path.resolve(__dirname, 'public');

module.exports = {
  entry: entryDir,
  output: {
    filename: 'bundle.js',
    path: outputDir,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
