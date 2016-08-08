/**
 * 入口文件
 */

// 引入样式
require('styles/index.css');

// 引入基础库
window.React = require('react');
window.ReactDOM = require('react-dom');
window.ReactRouter = require('react-router');
window.Antd = require('antd');

// 引入路由，入口文件
require('./modules/Router.js');