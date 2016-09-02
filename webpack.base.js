/**
 * webpack 基础的配置
 */
var path = require('path');


module.exports = {
    entry: {
        index: './src/scripts/index.js'
    },

    devOutput: {
        //文件输出目录
        path: path.join(__dirname, 'prd'),
        //用于配置文件发布路径，如CDN或本地服务器
        publicPath: '/dzs_upms/prd/',
        //根据入口文件输出的对应多个文件名
        filename: '[name].js'
    },

    prodOutput: {
        //文件输出目录
        path: path.join(__dirname, 'prd'),
        //用于配置文件发布路径，如CDN或本地服务器
        publicPath: '/dzs_upms/prd/',
        //根据入口文件输出的对应多个文件名
        filename: '[name]@[chunkhash].js'
    },

    resolve: {
        alias: {
            styles: path.join(__dirname, 'src', 'styles'),
            common: path.join(__dirname, 'src', 'scripts', 'common'),
            components: path.join(__dirname, 'src', 'scripts', 'components'),
            actions: path.join(__dirname, 'src', 'scripts', 'actions'),
            constants: path.join(__dirname, 'src', 'scripts', 'constants'),
            services: path.join(__dirname, 'src', 'scripts', 'services')
        },
        extensions: ['', '.js', '.css']
    },

    module: {
        loaders: [
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

    provideLibs: {
        Antd: 'antd',
        React: 'react',
        ReactDOM: 'react-dom',
        ReactRouter: 'react-router',
        Redux: 'redux',
        ReactRedux: 'react-redux',
        ReduxThunk: 'redux-thunk',
        ReduxConnect: 'common/utils/ReduxConnect.js'
    },

    postcss: function () {
        return [
            require('precss'),
            require('postcss-strip-inline-comments'),
            require('postcss-cssnext')()
        ];
    }
};