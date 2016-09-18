// 配置路由
let { Router, Route, browserHistory, IndexRoute } = ReactRouter;

// 引入页面模块
import App from './containers/App';
import SysIndex from './components/sysmanage/SysIndex';
import SysProjects from './components/sysmanage/SysProjects';

import MyIndex from './components/myprojects/MyIndex';
import MyProjects from './components/myprojects/MyProjects';

import Users from './components/common/users/Users';
import Roles from './components/common/roles/Roles';
import Resources from './components/common/resources/Resources';


export default class AppRouter extends React.Component {
  
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={MyIndex}/>

          <Route path="page/myprojects" component={MyIndex}>
            <IndexRoute component={MyProjects}/>
            <Route path=":id" component={Users} />
            <Route path=":id/users" component={Users} />
            <Route path=":id/roles" component={Roles} />
            <Route path=":id/resources" component={Resources} />
          </Route>

          <Route path="page/sysmanage" component={SysIndex}>
            <IndexRoute component={SysProjects}/>
            <Route path="projects" component={SysProjects} />
            <Route path="users" component={Users} />
            <Route path="roles" component={Roles} />
            <Route path="resources" component={Resources} />
          </Route>

        </Route>
      </Router>
    );
  }

}