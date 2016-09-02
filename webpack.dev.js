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
var CopyWebpackPlugin = require('copy-webpack-plugin');
// 引入基础配置
var baseConfig = require('./webpack.base.js');
// 引入第三方库的 dll 文件
var vendorsManifest = require('./dll/vendors_manifest.json');
var vendorsFileName = vendorsManifest.name.replace('_', '@') + '.js';



module.exports = {
    // 获取项目入口js文件
    entry: genEntry(),
    output: baseConfig.devOutput,
    resolve: baseConfig.resolve,
    // 生成sourcemap,便于开发调试
    devtool: "cheap-source-map",
    //各种加载器，即让各种文件格式可用require引用
    module: {
        loaders: baseConfig.module.loaders.concat(
            // js 类型资源的处理
            {
                test: /\.jsx?$/,
                include: /src\/scripts\//,
                loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0']
            },
            // css 类型资源的处理
            {
                test: /\.css$/,
                include: /src\/styles\//,
                loader: 'style-loader!css-loader?importLoaders=2&sourceMap!postcss-loader?parser=postcss-scss'
            }
        )
    },
    plugins: [
        // 引用打包好的第三方库
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: vendorsManifest
        }),
        // 把第三方库DLL文件拷贝到 prd 目录下
        new CopyWebpackPlugin([
            { from: './dll/' + vendorsFileName, to: vendorsFileName }
        ]),
        // 把第三方库的依赖注入到代码中
        new webpack.ProvidePlugin(baseConfig.provideLibs),
        //增加HMR(模块热插拔)
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // 构建时展示进度
        new ProgressPlugin(function(percentage, msg) {
            console.log(parseInt(percentage * 100) + '%', msg);
        })
    ],
    postcss: baseConfig.postcss

};


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