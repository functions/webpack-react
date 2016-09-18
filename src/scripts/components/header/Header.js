/**
 * 页面的头部，包括
 *   logo
 *   基本操作栏
 */
import * as links from 'constants/Links';
import actions from 'actions';

const { Icon } = Antd;
const { Link } = ReactRouter;


class Header extends React.Component {

  static mapToRedux = {
    mapStateToProps: state => ({

    }),
    mapDispatchToProps: {
      switchProject: actions.MyIndex.switchProject,
      switchNavItem: actions.SysIndex.switchNavItem
    }
  };

  constructor() {
    super()
  }

  render() {
    const username = window.username;
    
    return (
      <header className="pf-head">
        <div className="pf-topbar">
          <div className="pf-logo">
            <h1>UPMS</h1>
          </div>
          <div className="pf-tlb-info">
            <span className="pf-tlb-tips">你好, {username} ! </span>
            <span className="pf-tlb-button" onClick={() => this.clickMyProjects()}>
              <Link to={links.MY_PROJECTS}><Icon type="github" /> 我的项目</Link>
            </span>
            <span className="pf-tlb-button" onClick={() => this.clickSysManage()}>
              <Link to={links.SYS_MANAGE}><Icon type="windows" /> 系统管理</Link>
            </span>
            <span className="pf-tlb-button"><Icon type="logout" /> 退出</span>
          </div>
        </div>
      </header>
    );
  }

  componentDidMount() {
  }

  clickMyProjects() {
    this.props.switchProject('');
  }

  clickSysManage() {
    this.props.switchNavItem('');
  }

}

export default ReduxConnect(Header);