'use strict'
const {
    VueLoaderPlugin,
} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        watchOptions: {
            poll: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            }, 
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
        }),
        new CopyWebpackPlugin([{
            from: resolve('static/img'),
            to: resolve('dist/static/img'),
            toType: 'dir'
        }]),
    ],
}