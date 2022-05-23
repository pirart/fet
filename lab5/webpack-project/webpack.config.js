// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: __dirname, 
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/assets/images/", to: "./" },
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/rozklad.html'),
            filename: 'rozklad.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/news.html'),
            filename: 'news.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/photo.html'),
            filename: 'photo.html'
        }),
        new CleanWebpackPlugin({
            root: './dist/'
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
}