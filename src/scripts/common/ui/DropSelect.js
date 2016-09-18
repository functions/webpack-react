/**
 * 
 */
const { Icon, Menu, Dropdown } = Antd;
const { Link } = ReactRouter;

export default class DropSelect extends React.Component {

  static defaultProps = {
    title: '请选择项目 V',
    selectedKey: '',
    items: [],
    onSelect: () => {}
  }

  constructor() {
    super();
  }

  render() {
    const { title, items, selectedKey, onSelect } = this.props;
    let selectItem = searchItem(selectedKey, items);
    let showTitle = title;
    if (selectItem) {
      showTitle = selectItem.title;
    }

    const menu = (
      <Menu onSelect={onSelect}>
        {
          items.map(item => {
            return (
              <Menu.Item key={item.key}>
                <Link to={item.href}>{item.title}</Link>
              </Menu.Item>
            );
          })
        }
      </Menu>
    );
    
    return (
      <Dropdown overlay={menu} getPopupContainer={() => document.querySelector('.navbar-title-wrap')}>
        <span className="navbar-title-wrap">
          <a className="ant-dropdown-link" href="javascript:;">{showTitle}</a>
        </span>
      </Dropdown>
    );
  }

  componentDidMount() {
  }

}


function searchItem (key, items) {
  for (var i = 0; i < items.length; i++) {
    if(items[i].key === key) {
      return items[i];
    }
  }
  return null;
}