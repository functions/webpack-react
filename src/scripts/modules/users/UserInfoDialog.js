/**
 * 
 */
import Dialog from 'common/ui/Dialog';
import UserInfo from './UserInfo';

let { Button, Form } = Antd;


export default class UserInfoDialog extends React.Component {
    
    static defaultProps = {

    }

    state = {

    }

    constructor() {
        super();
    }

    render() {
        let UserInfoForm = Form.create({})(UserInfo);

        return (
            <Dialog { ...this.props }>
                <UserInfoForm />
            </Dialog>
        );
    }

    componentDidMount() {

    }

}
