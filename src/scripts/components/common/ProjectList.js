/**
 * 
 */
let { Button, Icon, Card } = Antd;
import ProjectCreate from 'components/common/ProjectCreate';


export default class ProjectList extends React.Component {

  static defaultProps = {
    projects: [],
    projCreateVisible: false
  }

  constructor() {
    super();
  }

  render() {
    const { projects, projCreateVisible } = this.props;
    let projectsOperate = null;
    // 生成项目卡片列表
    let projectCardList = projects.map( item => {
      // 卡片上的操作按钮
      projectsOperate = (
        <span>
          <span className="proj-item-ops"><Icon type="edit" /></span>
          <span className="proj-item-ops"><Icon type="cross" /></span>
        </span>
      );
      // 单个卡片组件
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
    // 渲染卡片列表，工具栏
    return (
      <div className="proj-list-wrap">
        <div className="opts-bar">
          <Button type="primary" onClick={ () => this.showAddProject() }>
            <Icon type="plus-circle-o" />新建项目
          </Button>
        </div>
        <div className="proj-list">
          {projectCardList}
        </div>
        <ProjectCreate visible={projCreateVisible} />
      </div>
    );
  }

  componentDidMount() {

  }

  showAddProject() {

  }

}