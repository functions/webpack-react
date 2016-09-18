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
        <div className="opts-bar">
          <Button type="primary" onClick={ () => this.btnAddUserClick() }>
            <Icon type="plus-circle-o" />添加用户
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
    console.log('22222');
  }

  onUserInfoOkClick() {
    
  }

  onUserInfoCanelClick() {

  }

}