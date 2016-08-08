// 配置路由
let { Router, Route, browserHistory, IndexRoute } = ReactRouter;

// 引入页面模块
import Home from './home/Home';

import Resource from './resource/Resource';
import ResURL from './resource/ResURL';
import ResInput from './resource/ResInput';
import ResAPI from './resource/ResAPI';

import Users from './users/Users';
import Roles from './roles/Roles';

// 渲染页面
let domContainer = document.querySelector('.main');

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/page" component={Home} />
        <Route path="/page/projects" component={Home} >
            <IndexRoute component={Resource} />
            <Route path="resource" component={Resource}>
                <Route path="url" component={ResURL} />
                <Route path="input" component={ResInput} />
                <Route path="api" component={ResAPI} />
            </Route>
            <Route path="users" component={Users} />
            <Route path="roles" component={Roles} />
        </Route>
    </Router>
), domContainer);