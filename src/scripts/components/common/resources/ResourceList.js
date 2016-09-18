/**
 * 
 */
let { Table } = Antd;


export default class ResourceList extends React.Component {
    
    static defaultProps = {
        columns: [],
        data: [],
        rowSelection: {}
    }

    state = {

    }

    constructor() {
        super();
    }

    render() {
        let columns = this.props.columns,
            rowSelection = this.props.rowSelection,
            data = this.props.data;
        return (
             <Table columns={columns} rowSelection={rowSelection} dataSource={data} />
        );
    }

    componentDidMount() {

    }

}
