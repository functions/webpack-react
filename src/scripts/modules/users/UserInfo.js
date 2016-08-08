/**
 * 
 */
let { Button, Form, Input } = Antd;
const FormItem = Form.Item;


export default class UserInfo extends React.Component {
    
    static defaultProps = {
        
    }

    state = {

    }

    constructor() {
        super();
    }

    render() {
        let { getFieldProps } = this.props.form;

        let formItemLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 12 }
        };

        return (
            <Form horizontal form={this.props.form}>
                <FormItem
                    {...formItemLayout}
                    label="用户名"
                >
                    <Input {...getFieldProps('username', {})} type="text" placeholder="请输入用户名(Qtalk ID)" />
                </FormItem>
            </Form>
        );
    }

    componentDidMount() {

    }

}