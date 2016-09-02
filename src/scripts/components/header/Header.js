/**
 * 页面的头部，包括
 *   logo
 *   基本操作栏
 */
import HistoryFly from 'common/utils/HistoryFly';
import * as links from 'constants/Links'
import actions from 'actions';

const { Select, Icon } = Antd;
const { Link } = ReactRouter;
const Option = Select.Option;


class Header extends React.Component {

  static mapToRedux = {
    mapStateToProps: state => ({
      curProjectId: state.header.curProjectId,
      username: state.header.username,
      projects: state.header.projects
    }),
    mapDispatchToProps: {
      switchProject: actions.header.switchProject,
      myProjects: actions.header.myProjects,
      fetchProjects: actions.header.fetchProjects
    }
  };

  static defaultProps = {
    
  }

  state = {

  }

  constructor() {
    super()
  }

  render() {
    const { projects, username, curProjectId } = this.props;
    // 生成项目切换下拉列表
    let options = projects.map( item => {
      return (
        <Option key={item.key} value={item.key}>{item.title}</Option>
      );
    });
    return (
      <header className="pf-head">
        <div className="pf-topbar">
          <div className="pf-logo">
            <h1>UPMS</h1>
          </div>

          <div className="pf-switch-proj">
            <span className="pf-tlb-text">当前项目：</span>
            <Select defaultActiveFirstOption={false} value={curProjectId}
              onChange={ key => this.switchProject(key) }
            >
              {options}
            </Select>
          </div>

          <div className="pf-tlb-info">
            <span className="pf-tlb-tips">你好, {username} ! </span>
            <span className="pf-tlb-button" onClick={ () => this.myProjects() }>
              <Link to={links.MY_PROJECTS}><Icon type="github" /> 我的项目</Link>
            </span>
            <span className="pf-tlb-button"><Icon type="logout" /> 退出</span>
          </div>
        </div>
      </header>
    );
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  switchProject(projectId) {
    this.props.switchProject(projectId);
    // 跳转到指定的项目下的用户管理页面
    HistoryFly.go(links.USERS, projectId);
  }

  myProjects() {
    this.props.myProjects();
  }

}
// 调用 redux connect 关联当前组件到 store
export default ReduxConnect(Header);