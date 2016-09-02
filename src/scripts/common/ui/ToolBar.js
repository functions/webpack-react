/**
 * 
 */
const { Icon } = Antd;
const { Link } = ReactRouter;


export default class ToolBar extends React.Component {

  static defaultProps = {
    activeKey: '',
    toolbarList: []
  }

  state = {

  }

  constructor() {
    super();
  }

  render() {
    const { activeKey, toolbarList } = this.props;
    let className = '';
    let toolbarItems = null;
    // 生成导航按钮
    if (toolbarList.length > 0) {
      toolbarItems = toolbarList.map( item => {
        if (item.key === activeKey) {
          className = 'active';
        } else {
          className = '';
        }
        return (
          <li key={item.key} className={"nav-item " + className}>
            <Link to={item.link}>
              <Icon className={"icon " + item.icon} type={item.iconType} />
              <span className="text">{item.title}</span>
            </Link>
          </li>
        );
      });
    }

    return (
      <nav className="pf-toolbar">
        <ul className="pf-tlb-nav">
          { toolbarItems }
        </ul>
      </nav>
    );
  }

  componentDidMount() {

  }

}
