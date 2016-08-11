/**
 * 前端构建的公共路径配置信息
 */

var Path = require('path');

module.exports = {
    gulpDest: Path.join('prd'),
    output: Path.join(__dirname, 'prd'),  // 输入文件的路径
    public: '/prd/',

    entry: {
        index: './src/scripts/index.js'
    },

    stylesSrc: Path.join(__dirname, 'src', 'styles'),
    scriptsSrc: Path.join(__dirname, 'src', 'scripts')
};