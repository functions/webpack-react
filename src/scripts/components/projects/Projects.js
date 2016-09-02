/**
 * 
 */
import * as links from 'constants/Links'
import actions from 'actions';
let { Button, Icon, Card } = Antd;


export default class Projects extends React.Component {

  static mapToRedux = {
    mapStateToProps: state => ({
      projects: state.header.projects
    }),
    mapDispatchToProps: {
    }
  };

  static defaultProps = {
    breadcrumb: '我的项目',
    projects: []
  }

  state = {

  }

  constructor() {
    super();
  }

  render() {
    const { projects, breadcrumb } = this.props;
    let projectsOperate = null;
    let projectCardList = projects.map( item => {
      projectsOperate = (
        <span>
          <span className="proj-item-ops"><Icon type="edit" /></span>
          <span className="proj-item-ops"><Icon type="cross" /></span>
        </span>
      );
      return (
        <Card title={item.title} extra={projectsOperate} key={item.key} 
          bordered={false} className="proj-item"
        >
          <p>用户数量: {item.userCount}</p>
          <p>角色数量: {item.roleCount}</p>
          <p>资源数量: {item.resourceCount}</p>
        </Card>
      );
    });

    return (
      <div className="proj-wrap">
        <div className="proj-breadcrumb">
          <span className="breadcrumb-home"><Icon type="rollback" /> 返回</span>
          <span className="breadcrumb-arrow"><Icon type="caret-right" /></span>
          <span><Icon type="github" /> {breadcrumb}</span>
        </div>
        <div className="opts-bar">
          <Button type="primary" onClick={ () => this.showAddProject() }>
            <Icon type="plus-circle-o" />新建项目
          </Button>
        </div>
        <div className="proj-list">
          {projectCardList}
        </div>
      </div>
    );
  }

  componentDidMount() {

  }

  showAddProject() {
    
  }

}

export default ReduxConnect(Projects);