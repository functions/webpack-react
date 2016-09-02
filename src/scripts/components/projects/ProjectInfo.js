/**
 * 
 */
import Dialog from 'common/ui/Dialog';
let { Button, Input, Select } = Antd;
let Option = Select.Option;


export default class ProjectInfo extends React.Component {
  
  static defaultProps = {
    value: '',
    managers: [],
    onFinish: () => {}
  }

  state = {
    visible: false
  }

  constructor() {
    super();
  }

  render() {
    let selectedManagers = [];
    let managersOption = this.props.managers.map(function(item) {
      if (item.selected) {
        selectedManagers.push(item.text);
      }
      return (
        <Option key={item.key} value={item.text}>{item.text}</Option>
      );
    });
    const { visible, value } = this.props;

    return (
      <Dialog visible={visible} title="新建项目"
          onOkClick={() => this.submitProject}
      >
        <div className="form-item">
          <span className="item-label">项目名称: </span>
          <Input placeholder="请输入项目名称" ref="projNameInput" value={value} />
        </div>
        <div className="form-item">
          <span className="item-label">管理员: </span>
          <Select multiple
            defaultActiveFirstOption={false}
            style={{ width: '100%' }}
            searchPlaceholder="输入 qtalk ID"
            defaultValue={selectedManagers}
            onChange={this.handleManageSelect}
          >
            { managersOption }
          </Select>
        </div>
      </Dialog>
    );
  }

  componentDidMount() {
    
  }

  show() {
    this.setState({
      visible: true
    });
    setTimeout(function () {
      this.refs.projNameInput.refs.input.focus();
    }, 300);
  }

  handleManageSelect() {

  }

  submitProject() {
    let projectName = this.refs.projNameInput.refs.input.value;
    console.log(projectName);
    this.setState({
      visible: false
    });

    // 处理完成
    this.props.onFinish();
  }
}
