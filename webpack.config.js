/**
 * configuration description
 * https://github.com/webpack/docs/wiki/configuration#configuration-object-content
 * webpack document
 * http://webpack.github.io/docs/
 */
'use strict'
var webpack = require('webpack');
// 引入基础配置
var baseConfig = require('./webpack.base.js');

//提取css独立成文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var extractSCSS = new ExtractTextPlugin('[name].css');
// var makeFekitVerPlugin = require("./makeFekitVerPlugin");

module.exports = {
    //获取项目入口js文件
    entry: baseConfig.entry,
    output: baseConfig.output,
    resolve: baseConfig.resolve,
    //各种加载器，即让各种文件格式可用require引用
    module: {
        loaders: baseConfig.module.loaders.concat(
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader:  extractSCSS.extract('css-loader?sourceMap!postcss-loader?parser=postcss-scss')
            }
        )
    },
    postcss: baseConfig.postcss,
    plugins: [
        new ProgressPlugin(function(percentage, msg) {
            console.log(parseInt(percentage * 100) + '%', msg);
        }),
        extractSCSS,
        //增加HMR(模块热插拔)
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        //js文件的压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //生成和fekit一致的ver文件
        // new makeFekitVerPlugin()
    ]
};