/**
 * 
 */
import DropSelect from 'common/ui/DropSelect';
import ToolBar from 'common/ui/ToolBar';
const { Icon } = Antd;


export default class NavBar extends React.Component {

  static defaultProps = {
    type: 'DROPDOWN',
    // dropdown 模式下的属性
    dropSelectData: [],
    activeSelect: '',
    onSelect: () => {}, 
    // 导航相关的属性和事件
    navItems: [],
    activeNav: '',
    onNavChange: () => {},  // 导航切换的事件处理
    // 标题模式下的属性
    title: '',
    icon: ''
  }

  constructor() {
    super();
  }

  render() {
    const { type, dropSelectData, onSelect, activeSelect, 
            navItems, activeNav, title, icon, onNavChange } = this.props;
    
    let navbarLeft = '';
    switch(type){
      case 'DROPDOWN':
        navbarLeft = <DropSelect items={dropSelectData} onSelect={onSelect} 
                        selectedKey={activeSelect} 
                      />;
        break;
      case 'TITLE':
        navbarLeft = (
          <span className="navbar-title">
            <span><Icon type={icon} /> {title} </span>
            <span className="breadcrumb-arrow"><Icon type="caret-right" /></span>
          </span>
        );
        break;
      default:
        navbarLeft = <DropSelect items={dropSelectData} onSelect={onSelect} 
                        selectedKeys={activeSelect} 
                      />;
    }

    return (
      <div className="navbar-wrap">
        <div className="nabr-item navbar-left">
          { navbarLeft }
        </div>
        <div className="nabr-item navbar-arr">
          <div className="box-arrow-scale">
            <div className="box-arrow"></div>
          </div>
        </div>
        <div className="nabr-item navbar-right">
          <ToolBar toolbarList={navItems} activeKey={activeNav} onChange={onNavChange} />
        </div>
      </div>
    );
  }

  componentDidMount() {
  }

}
