/**
 * configuration description
 * https://github.com/webpack/docs/wiki/configuration#configuration-object-content
 * webpack document
 * http://webpack.github.io/docs/
 */
'use strict'
var webpack = require('webpack');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

// 引入基础配置
var baseConfig = require('./webpack.base.js');
// 引入第三方库的 dll 文件
var vendorsManifest = require('./dll/vendors_manifest.json');

//提取css独立成文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractSCSS = new ExtractTextPlugin('[name]@[chunkhash].css');



module.exports = {
    //获取项目入口js文件
    entry: baseConfig.entry,
    output: baseConfig.prodOutput,
    resolve: baseConfig.resolve,
    //各种加载器，即让各种文件格式可用require引用
    module: {
        loaders: baseConfig.module.loaders.concat(
            // js 类型资源的处理
            {
                test: /\.jsx?$/,
                include: /src\/scripts\//,
                loaders: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0']
            },
            {
                test: /\.css$/,
                include: /src\/styles\//,
                loader:  extractSCSS.extract('css-loader?sourceMap&minimize!postcss-loader?parser=postcss-scss')
            }
        )
    },
    plugins: [
        // 清空编译后的目录
        new CleanWebpackPlugin(['prd']),
        // 引用打包好的第三方库
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: vendorsManifest
        }),
        // 把第三方库的依赖注入到代码中
        new webpack.ProvidePlugin(baseConfig.provideLibs),
        extractSCSS,
        //js文件的压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 根据文件内容生成 MD5
        new WebpackMd5Hash(),
        new ProgressPlugin(function(percentage, msg) {
            console.log(parseInt(percentage * 100) + '%', msg);
        })
    ],
    postcss: baseConfig.postcss
};