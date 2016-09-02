var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var path = require('path');


module.exports = {

    entry: {
        vendors: [
            'isomorphic-fetch',
            'react',
            'react-dom',
            'react-router',
            'redux',
            'redux-thunk',
            'react-redux',
            'redux-promise-middleware',
            'antd'
        ]
    },

    output: {
        path: path.resolve('./dll/'),
        filename: '[name]@[chunkhash].js',
        library: '[name]_[chunkhash]'
    },

    plugins: [
        new CleanWebpackPlugin(['dll']),
        new webpack.DllPlugin({
            path: path.resolve('./dll/[name]_manifest.json'),
            name: '[name]_[chunkhash]',
            context: __dirname
        }),
        // 压缩 js
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // 根据文件内容生成 MD5
        new WebpackMd5Hash(),
        // 显示进度
        new ProgressPlugin(function(percentage, msg) {
            console.log(parseInt(percentage * 100) + '%', msg);
        })
    ]
};
