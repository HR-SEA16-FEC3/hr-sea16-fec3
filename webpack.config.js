// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryDir = path.resolve(__dirname, 'client', 'App.jsx')
const outputDir = path.resolve(__dirname, 'public')


module.exports = {
    mode: 'development',
    entry: entryDir,
    output: {
        filename: 'bundle.js',
        path: outputDir
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};
