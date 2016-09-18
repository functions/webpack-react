/**
 * 
 */
import actions from 'actions'
import ProjectList from 'components/common/ProjectList';


class SysProjects extends React.Component {

  static mapToRedux = {
    mapStateToProps: state => ({
      projects: state.SysProjects.projects
    }),
    mapDispatchToProps: {
      fetchProjects: actions.SysProjects.fetchProjects
    }
  };

  static defaultProps = {
    projects: []
  }

  constructor() {
    super();
  }

  render() {
    const { projects } = this.props;

    return (
      <ProjectList projects={projects} />
    );
  }

  componentDidMount() {
    // 执行获取项目列表的 action
    this.props.fetchProjects();
  }

}

export default ReduxConnect(SysProjects);