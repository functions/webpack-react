/**
 * 
 */
import DataTable from 'common/ui/DataTable';


const columns = [
    {
        title: '登录账号',
        dataIndex: 'username',
        key: 'username',
        // render: name => `${name.first} ${name.last}`,
        width: '20%'
    },
    {
        title: '姓名',
        sorter: true,
        dataIndex: 'name',
        key: 'name',
        width: '20%'
    }, 
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status'
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime'
    }
];


export default class UserList extends React.Component {

    defaultProps = {

    }

    state = {
        
    }

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <DataTable columns={columns} />
            </div>
        );
    }

    componentDidMount() {
    }


}