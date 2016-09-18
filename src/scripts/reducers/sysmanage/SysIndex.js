import * as act from 'constants/ActionTypes';
import * as links from 'constants/Links';

const initialState = {
  projectId: 'system',
  curNavId: 'sys-nav-1',
  navList: [
    {
      key: 'sys-nav-1',
      title: '项目管理',
      link: links.SYS_PROJECTS,
      icon: 'projects',
      iconType: 'github'
    },
    {
      key: 'sys-nav-2',
      title: '用户管理',
      link: links.SYS_USERS,
      icon: 'users',
      iconType: 'team'
    },
    {
      key: 'sys-nav-3',
      title: '角色管理',
      link: links.SYS_ROLES,
      icon: 'roles',
      iconType: 'solution'
    },
    {
      key: 'sys-nav-4',
      title: '资源管理',
      link: links.SYS_RESOURCES,
      icon: 'resources',
      iconType: 'appstore'
    }
  ]
};

const Reducers = {

  // 获取项目列表
  [act.SYS_FETCH_PROJECTS] (state, action) {
    return Object.assign({}, state, {
      projects: action.projects
    })
  },

  // 系统管理切换导航
  [act.SYS_SWITCH_NAV] (state, action) {
    return Object.assign({}, state, {
      curNavId: action.curNavId || initialState.curNavId
    })
  }

};

/**
 * 根据 actionType 调用对应的 reducer
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export default function SysIndex (state = initialState, action) {
  let reducer = Reducers[action.type];
  if (reducer) {
    return reducer(state, action);
  }
  else {
    return state;
  }
}