/**
 * 
 */
import actions from 'actions';
import NavBar from 'components/common/NavBar';
const { Icon } = Antd;
const { Link } = ReactRouter;


class SysIndex extends React.Component {

  static mapToRedux = {
    mapStateToProps: state => ({
      curNavId: state.SysIndex.curNavId,
      navList: state.SysIndex.navList
    }),
    mapDispatchToProps: {
      switchNavItem: actions.SysIndex.switchNavItem
    }
  };

  static defaultProps = {
    curNavId: '',
    navList: []
  }

  constructor() {
    super();
  }

  render() {
    const { curNavId, navList, switchNavItem } = this.props;
    return (
      <div className="proj-wrap">
        <NavBar type={'TITLE'} navItems={navList} activeNav={curNavId}
          title={'系统管理'} icon={'windows'} onNavChange={switchNavItem}
        />
        { this.props.children }
      </div>
    );
  }

  componentDidMount() {
  }

}

export default ReduxConnect(SysIndex);