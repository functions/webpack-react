import * as act from 'constants/ActionTypes';
import * as links from 'constants/Links';

// 默认选中项目
const EMPTY_PROJ = '请选择项目';

// 单个项目的导航列表
const NAV_LIST = [
  {
    key: 'nav-2',
    title: '用户管理',
    link: links.MY_PROJECT_USERS,
    icon: 'users',
    iconType: 'team'
  },
  {
    key: 'nav-3',
    title: '角色管理',
    link: links.MY_PROJECT_ROLES,
    icon: 'roles',
    iconType: 'solution'
  },
  {
    key: 'nav-4',
    title: '资源管理',
    link: links.MY_PROJECT_RESOURCES,
    icon: 'resources',
    iconType: 'appstore'
  }
];

const initialState = {
  curProjectId: EMPTY_PROJ,
  projects: [],
  curNavId: 'nav-2',
  navList: []
};

const Reducers = {

  /**
   * 获取我的项目列表
   */
  [act.MY_FETCH_PROJECTS] (state, action) {
    // 遍历每个项目的信息并为其添加 href 属性
    let href = '';
    let projects = [].concat(action.projects).map( item => {
      href = links.MY_PROJECT_HREF.replace(':id', item.key);
      return Object.assign({}, item, { href });
    });
    return Object.assign({}, state, { projects });
  },

  /**
   * 切换项目
   */
  [act.MY_SWITCH_PROJECT] (state, action) {
    const curProjectId = action.curProjectId || EMPTY_PROJ;
    let navList = [];
    // 如果没有选择任何项目
    if (curProjectId === EMPTY_PROJ) {
      navList = [];
    }
    // 如果选择了一个项目
    else {
      let link = '';
      // 修改导航按钮的链接为当前项目的链接
      navList = [].concat(NAV_LIST).map( item => {
        link = item.link.replace(':id', curProjectId);
        return Object.assign({}, item, { link });
      });
    }
    // 返回切换后的结果
    return Object.assign({}, state, { 
      curProjectId, 
      navList,
      curNavId: initialState.curNavId
    });
  },

  /**
   * 切换导航
   */
  [act.MY_SWITCH_NAV] (state, action) {
    return Object.assign({}, state, {
      curNavId: action.curNavId
    })
  }

};

/**
 * 根据 actionType 调用对应的 reducer
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export default function MyProjects (state = initialState, action) {
  let reducer = Reducers[action.type];
  if (reducer) {
    return reducer(state, action);
  }
  else {
    return state;
  }
}