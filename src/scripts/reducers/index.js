import { combineReducers } from 'redux';

import SysProjects from './sysmanage/SysProjects';
import SysIndex from './sysmanage/SysIndex';
import MyIndex from './myprojects/MyIndex';

const rootReducer = combineReducers({
  SysIndex,
  SysProjects,
  MyIndex
});

export default rootReducer;