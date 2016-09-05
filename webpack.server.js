var webpackConfig = require('./webpack.dev.js');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var open = require('open');

var serverPath = 'http://127.0.0.1:3001';
var webpackServer = 'http://127.0.0.1:3000/';

new WebpackDevServer(webpack(webpackConfig), {
    // contentBase: serverPath,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    noInfo: false,
    historyApiFallback: true,
    proxy: {
        "\/$|\/page\/?|\/page\/.*|\/api\/.*": serverPath
    }
}).listen(3000, 'localhost', function(err) {
    if (err) console.log(err);
    console.log('Listening at localhost:' + webpackServer);
    console.log('Opening your system browser...');
    open(webpackServer);
});