/**
 * 
 */
import MenuNav from 'common/ui/MenuNav';
import ResourceList from './ResourceList';
let { Button, Icon } = Antd;
let ButtonGroup = Button.Group;

let columns = [
    {
        title: '资源名称',
        dataIndex: 'resourceName',
        key: 'resourceName',
        width: '40%'
    },
    {
        title: '资源标示',
        dataIndex: 'resourceId',
        key: 'resourceId',
        width: '40%'
    },
    {
        title: '操作',
        dataIndex: '',
        key: 'operate',
        width: '20%',
        render: () => {
            return (
                <ButtonGroup size="small">
                    <Button type="primary">添加</Button>
                    <Button type="ghost">修改</Button>
                    <Button>删除</Button>
                </ButtonGroup>
            );
        }
    }
];

let rowSelection = {
    onChange(selectedRowKeys, selectedRows) {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
    },
    onSelectAll(selected, selectedRows, changeRows) {
        console.log(selected, selectedRows, changeRows);
    }
};

let menuData = [
    {
        key: 'type-url',
        title: 'URL资源',
        link: '/page/projects/resource/url'
    },
    {
        key: 'type-data',
        title: '录入资源',
        link: '/page/projects/resource/input'
    },
    {
        key: 'type-api',
        title: '接口提供资源',
        link: '/page/projects/resource/api'
    }
];


export default class Resource extends React.Component {
    
    static defaultProps = {

    }

    state = {
        data: []
    }

    constructor() {
        super();
    }

    render() {
        return (
            <div className="resource-wrap">
                <div className="reso-header">
                    <MenuNav mode="horizontal" data={menuData}/>
                </div>
                <div className="reso-body">
                    <ResourceList columns={columns} data={this.state.data} rowSelection={rowSelection} />
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            data: [
                {
                    key: 1,
                    resourceId: '/bnb/list',
                    resourceName: '列表页',
                    children: [
                        {
                            key: 2,
                            resourceId: '/bnb/subList',
                            resourceName: '子列表'
                        },
                        {
                            key: 3,
                            resourceId: '/bnb/attcheList',
                            resourceName: '附列表'
                        }
                    ]
                },
                {
                    key: 4,
                    resourceId: '/bnb/detail',
                    resourceName: '详情页'
                },
                {
                    key: 5,
                    resourceId: '/bnb/booking',
                    resourceName: '报价页'
                }
            ]
        });
    }

}
