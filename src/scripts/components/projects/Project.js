/**
 * 
 */
const { Icon } = Antd;
const { Link } = ReactRouter;
import ToolBar from 'common/ui/ToolBar';


export default class Project extends React.Component {

  static defaultProps = {
    projectId: 'pj001',
    activeKey: 'nav-2',
    toolbarList: [
      {
        key: 'nav-2',
        title: '用户',
        link: '/page/project/:id/users',
        icon: 'users',
        iconType: 'team'
      },
      {
        key: 'nav-3',
        title: '角色',
        link: '/page/project/:id/roles',
        icon: 'roles',
        iconType: 'solution'
      },
      {
        key: 'nav-4',
        title: '资源',
        link: '/page/project/:id/resources',
        icon: 'resources',
        iconType: 'appstore'
      }
    ]
  }

  state = {

  }

  constructor() {
    super();
  }

  render() {
    const { activeKey, toolbarList, projectId } = this.props;
    // 修改导航按钮的链接为当前项目的链接
    let toolbarItems = toolbarList.map( item => {
      item.link = item.link.replace(':id', projectId);
      return item;
    });

    return (
      <div className="project-wrap">
        <ToolBar toolbarList={toolbarItems} activeKey={activeKey}/>
        { this.props.children }
      </div>
    );
  }

  componentDidMount() {

  }

}
