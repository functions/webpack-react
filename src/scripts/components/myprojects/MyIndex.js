/**
 * 
 */
import actions from 'actions';

import MyProjects from 'components/myprojects/MyProjects';
import NavBar from 'components/common/NavBar';
let { Button, Icon, Card } = Antd;


class MyIndex extends React.Component {

  static mapToRedux = {
    mapStateToProps: state => ({
      curProjectId: state.MyIndex.curProjectId,
      curNavId: state.MyIndex.curNavId,
      projects: state.MyIndex.projects,
      navList: state.MyIndex.navList
    }),
    mapDispatchToProps: {
      fetchProjects: actions.MyIndex.fetchProjects,
      switchNavItem: actions.MyIndex.switchNavItem,
      switchProject: actions.MyIndex.switchProject
    }
  };

  static defaultProps = {
    curProjectId: '',
    projects: [],
    navList: [],
    curNavId: '',
    switchProject: () => {}
  }

  constructor() {
    super();
  }

  render() {
    const { projects, curProjectId, navList, curNavId, switchNavItem } = this.props;
    return (
      <div className="proj-wrap">
        <NavBar type={'DROPDOWN'} 
          navItems={navList} activeNav={curNavId} onNavChange={switchNavItem} 
          dropSelectData={projects} activeSelect={curProjectId} 
          onSelect={(args)=>this.projectSelect(args)} 
        />
        { this.props.children || <MyProjects /> }
      </div>
    );
  }

  componentDidMount() {
  }

  projectSelect(params) {
    this.props.switchProject(params.key);
  }

}

export default ReduxConnect(MyIndex);