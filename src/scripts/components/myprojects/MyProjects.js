/**
 * 
 */
import actions from 'actions'
import ProjectList from 'components/common/ProjectList';


class MyProjects extends React.Component {

  static mapToRedux = {
    mapStateToProps: state => ({
      projects: state.MyIndex.projects
    }),
    mapDispatchToProps: {
      fetchProjects: actions.MyIndex.fetchProjects
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

export default ReduxConnect(MyProjects);