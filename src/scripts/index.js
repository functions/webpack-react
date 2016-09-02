/**
 * 入口文件
 */

// 引入样式
import 'styles/index.css';

// 引入 provider 组件
const { Provider } = ReactRedux;

// redux store
import configureStore from './store';
import AppRouter from './AppRouter';

const store = configureStore();

// 渲染页面
ReactDOM.render((
  <Provider store={store}>
    <AppRouter />
  </Provider>
), document.querySelector('.main'));