/**
 * 
 */
const { Icon } = Antd;
const { Link } = ReactRouter;


export default class ToolBar extends React.Component {

  static defaultProps = {
    activeKey: '',
    toolbarList: [],
    onChange: () => {}
  }

  constructor() {
    super();
  }

  render() {
    const { activeKey, toolbarList } = this.props;
    let className = '', itemKey = '';
    let toolbarItems = null;
    // 生成导航按钮
    if (toolbarList.length > 0) {
      toolbarItems = toolbarList.map( item => {
        itemKey = item.key;
        if (itemKey === activeKey) {
          className = 'active';
        } else {
          className = '';
        }
        return (
          <li key={itemKey} className={"nav-item " + className} onClick={ this.itemClick.bind(this, itemKey) }>
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

  itemClick(itemKey) {
    this.props.onChange(itemKey);
  }

}
