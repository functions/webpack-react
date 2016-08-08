/**
 * 
 */
let { Menu, Icon } = Antd;
let {Link} = ReactRouter;
let SubMenu = Menu.SubMenu;


export default class MenuNav extends React.Component {
    
    static defaultProps = {
        data: [],
        mode: 'inline'
    }

    state = {

    }

    constructor() {
        super();
    }

    render() {
        let data = this.props.data || [];
        let menuList = data.map(function(item) {
            // 如果没有子元素, 直接返回空
            if (!item) return;

            // 如果有子菜单，则渲染子菜单
            let subItems = [], 
                items = item.items;
            // 如果有子菜单项
            if (items && items.length > 0) {
                subItems = items.map(function(subItem) {
                        return (
                            <Menu.Item key={subItem.key}>
                                <Link to={`${subItem.link}`}>{subItem.title}</Link>
                            </Menu.Item>
                        );
                    });
                return (
                    <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                        { subItems }
                    </SubMenu>
                );
            }
            else {
                // 如果没有子菜单项
                return (
                    <Menu.Item key={item.key}>
                        <Link to={`${item.link}`}>{item.title}</Link>
                    </Menu.Item>
                );
            }
        });

        return (
            <Menu mode={ this.props.mode }>
                { menuList }
            </Menu>
        );
    }

    componentDidMount() {

    }

}
