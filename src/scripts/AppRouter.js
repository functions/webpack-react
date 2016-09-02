// 配置路由
let { Router, Route, browserHistory, IndexRoute } = ReactRouter;

// 引入页面模块
import App from './containers/App';
import Projects from './components/projects/Projects';
import Project from './components/projects/Project';
import Users from './components/users/Users';
import Roles from './components/roles/Roles';
import Resources from './components/resources/Resources';


export default class AppRouter extends React.Component {
  
  static defaultProps = {
  }

  state = {
  }

  constructor() {
    super();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Project}/>
          <Route path="page/myprojects" component={Projects} />
          <Route path="page/project/:id" component={Project}>
            <IndexRoute component={Users}/>
            <Route path="users" component={Users} />
            <Route path="roles" component={Roles} />
            <Route path="resources" component={Resources} />
          </Route>
        </Route>
      </Router>
    );
  }

  componentDidMount() {

  }

}