/**
 * 
 */
let { Table } = Antd;


export default class DataTable extends React.Component {
    
    defaultProps = {
        columns: []
    }

    state = {
        data: [],
        pagination: {},
        loading: false
    }

    constructor() {
        super();
    }

    render() {
        return (
            <Table columns={this.props.columns}
              dataSource={this.state.data}
              pagination={this.state.pagination}
              loading={this.state.loading}
              onChange={this.handleTableChange.bind(this)}
            />
        );
    }

    componentDidMount() {
        this.fetch();
    }

    fetch() {
        let pagination = this.state.pagination;
        // Read total count from server
        // pagination.total = data.totalCount;
        let data = {
            results: [
                {
                    key: 1,
                    username: '123',
                    name: '123',
                    status: true,
                    createTime: '123'
                }
            ]
        }
        pagination.total = 200;
        this.setState({
            loading: false,
            data: data.results,
            pagination
        });
    }

    handleTableChange(pagination, filters, sorter) {
        console.log(pagination);
        let pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters
        });
    }

}
