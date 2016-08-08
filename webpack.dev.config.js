/**
 * configuration description
 * https://github.com/webpack/docs/wiki/configuration#configuration-object-content
 * webpack document
 * http://webpack.github.io/docs/
 */
'use strict'
var webpack = require('webpack');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
// 引入基础配置
var baseConfig = require('./webpack.base.js');


/**
 * 生成 dev 环境的主文件入口
 * @return {[type]} [description]
 */
function genEntry () {
    var webpackHMR = [
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server'
    ];
    var entry = {};
    var baseEntry = baseConfig.entry;
    for(var key in baseEntry) {
        entry[key] = webpackHMR.concat(baseEntry[key])
    }
    return entry;
}


module.exports = {
    //生成sourcemap,便于开发调试
    devtool: "eval-source-map",
    cache: true,
    //获取项目入口js文件
    entry: genEntry(),
    output: baseConfig.output,
    resolve: baseConfig.resolve,
    //各种加载器，即让各种文件格式可用require引用
    module: {
        loaders: baseConfig.module.loaders.concat(
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?sourceMap!postcss-loader?parser=postcss-scss'
            }
        )
    },
    postcss: baseConfig.postcss,
    plugins: [
        new ProgressPlugin(function(percentage, msg) {
            console.log(parseInt(percentage * 100) + '%', msg);
        }),
        //提取公共脚本，默认只有一个入口时可以不用，否则需要额外引入common.js
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        //增加公共头部
        // new webpack.BannerPlugin(),
        //增加HMR(模块热插拔)
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};