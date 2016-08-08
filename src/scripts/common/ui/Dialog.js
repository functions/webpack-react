/**
 * 
 */
let { Modal, Button } = Antd;


export default class Dialog extends React.Component {
    
    static defaultProps = {
        title: "用户信息",
        okBtnText: '提 交',
        cancelBtnText: '返 回',
        visible: false,
        loading: false,
        maskClosable: false,
        onOkClick: () => {},
        onCancelClick: null
    }

    state = {
        visible: false
    }

    constructor() {
        super();
        // 标记属性更新是否通过 state 执行的
        this.fromState = false;
    }

    render() {
        let handleOk = this.props.onOkClick,
            handleCancel = this.props.onCancelClick || this.onCancelClick.bind(this),
            loading = this.props.loading,
            visible = this.props.visible;

        // 如果使用 setState 方式更新 UI 则取 state 中的值
        // 默认从 props 中获取
        if (this.fromState) {
            visible = this.state.visible;
            this.fromState = false;
        }

        return (
            <Modal ref="modal"
                visible={visible} title={this.props.title} 
                onOk={handleOk} onCancel={handleCancel} maskClosable={this.props.maskClosable}
                footer={[
                    <Button key="back" type="ghost" size="large" onClick={handleCancel}>
                        {this.props.cancelBtnText}
                    </Button>,
                    <Button key="submit" type="primary" size="large" loading={loading} onClick={handleOk}>
                        { this.props.okBtnText }
                    </Button>
                ]}
            >
                { this.props.children }
            </Modal>
        );
    }

    componentDidMount() {

    }

    onCancelClick() {
        this.fromState = true;
        this.setState({
            visible: false
        });
    }

}
