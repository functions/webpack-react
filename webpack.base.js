/**
 * webpack 基础的配置
 */
// 引入基本路径配置
var buildConfig = require('./build.config.js');

module.exports = {
    entry: buildConfig.entry,

    output: {
        //文件输出目录
        path: buildConfig.output,
        //用于配置文件发布路径，如CDN或本地服务器
        publicPath: buildConfig.public,
        //根据入口文件输出的对应多个文件名
        filename: '[name].js'
    },

    resolve: {
        alias: {
            styles: buildConfig.stylesSrc,
            common: buildConfig.scriptsSrc + '/common'
        },
        extensions: ['', '.js', '.scss', '.json', '.jsx', '.css']
    },

    module: {
        loaders: [
            //.js 或 .jsx 文件使用 babel-loader 来编译处理
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'],
                include: [buildConfig.scriptsSrc]
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {
                test: /.(png|jpg|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                loader: 'url-loader?limit=50000'
            },
            {
                test: /\.(png|jpg|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                loader: 'file-loader'
            },
            //.json 文件使用json-loader 来编译处理
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    postcss: function (webpack) {
        return [
            require('postcss-import')({ addDependencyTo: webpack }),
            require('precss'),
            require('postcss-strip-inline-comments'),
            require('postcss-cssnext')()
        ];
    }
};