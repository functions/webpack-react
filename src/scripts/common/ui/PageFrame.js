/**
 * 页面通用结构： 头  左侧菜单  右侧内容
 */
let { Breadcrumb } = Antd;


export default class PageFrame extends React.Component {
    
    defaultProps = {
        header: ''
    }

    state = {

    }

    constructor() {
        super();
    }

    render() {
        return (
            <div className="pageframe-wrap">
                <header className="pf-head">
                    <div className="pf-topbar">
                        <div className="pf-logo">
                            <h1>UPMS</h1>
                        </div>
                    </div>
                </header>
                <section className="pf-body">
                    { this.props.children }
                </section>
            </div>
        );
    }

    componentDidMount() {

    }

}
