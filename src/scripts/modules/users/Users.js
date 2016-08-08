/**
 * 
 */
let { Button, Icon } = Antd;

import UserList from './UserList';
import UserInfoDialog from './UserInfoDialog';


export default class Users extends React.Component {
    
    defaultProps = {

    }

    state = {
        userInfoVisible: false
    }

    constructor() {
        super();
    }

    render() {
        return (
            <div className="user-wrap">
                <div className="user-toolbar">
                    <Button type="primary" onClick={this.btnAddUserClick.bind(this)}>
                        <Icon type="plus-circle-o" />
                        添加用户
                    </Button>
                </div>
                <div className="user-list-wrap">
                    <div className="user-list">
                        <UserList />
                    </div>
                </div>
                <UserInfoDialog visible={ this.state.userInfoVisible } 
                    onOkClick={ this.onUserInfoOkClick.bind(this) } 
                    onCancelClick={ this.onUserInfoCanelClick.bind(this)}
                />
            </div>
        );
    }

    componentDidMount() {

    }

    btnAddUserClick() {
        this.setState({ userInfoVisible: true });
    }

    onUserInfoOkClick() {
        console.log('11111');
        this.setState({ userInfoVisible: false });
    }

    onUserInfoCanelClick() {
        console.log('22222');
        this.setState({ userInfoVisible: false });
    }

}