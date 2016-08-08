var gulp = require('gulp');
var del = require('del');
var open = require('open');
// 引入基本路径配置
var buildConfig = require('./build.config.js');

/**************************
 *          webpack       *
 **************************/
gulp.task('webpack', ['clean'], function() {
    var webpackConfig = require('./webpack.config');
    var gulpWebpack = require('gulp-webpack');

    return gulp
        .src(buildConfig.gulpDest)
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest(buildConfig.gulpDest));
});
/**************************
 *          clean         *
 **************************/
gulp.task('clean', function(){
    del([ buildConfig.gulpDest ]);
});
/**************************
 *    webpack-dev-server  *
 **************************/
gulp.task('webpack-dev-server', [], function() {

    //start webpack develop server
    var webpackConfig = require('./webpack.dev.config');
    var WebpackDevServer = require('webpack-dev-server');
    var webpack = require('webpack');

    var serverPath = 'http://local.qunar.com:5001';
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
});

/**************************
 *          Main          *
 **************************/
gulp.task('default', function() {
    console.info('demo');
});
gulp.task('dev', ['webpack-dev-server']);
gulp.task('build', ['webpack']);
gulp.task('beta', ['copyProfile']);
gulp.task('prod', ['copyProfile']);