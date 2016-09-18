/**
 * 新建项目对话框
 */
let { Modal, Button } = Antd;


export default class ProjectCreate extends React.Component {

  static defaultProps = {
    visible: false,
    onSubmit: () => {},
    onCancel: () => {},
    loading: false
  }

  constructor() {
    super();
  }

  render() {
    const { handleOk, handleCancel } = this;
    const { visible, loading } = this.props;

    return (
      <Modal ref="modal" visible={visible} title={'新建项目'} 
        onOk={handleOk} onCancel={handleCancel} maskClosable={false} 
        footer={[
          <Button key="back" type="ghost" size="large" onClick={handleCancel}>取消</Button>,
          <Button key="submit" type="primary" size="large" loading={loading} onClick={handleOk}>提交</Button>
        ]}
      >
        <div>新建项目</div>
      </Modal>
    );
  }

  componentDidMount() {
  }

  handleOk() {
    console.log('ok');
  }

  handleCancel() {
    console.log('cancel');
  }

}
