import * as act from '../constants/ActionTypes';

const initialState = {
  curProjectId: '请选择项目',
  username: '曹滨',
  projects: []
};

const Reducers = {

  // 获取项目列表
  [act.FETCH_PROJECTS] (state, action) {
    return Object.assign({}, state, {
      projects: action.projects
    })
  },

  // 切换项目操作
  [act.SWITCH_PROJECT] (state, action) {
    return Object.assign({}, state, {
      curProjectId: action.curProjectId
    });
  },

  // 我的项目
  [act.MY_PROJECTS] (state, action) {
    return Object.assign({}, state, {
      curProjectId: action.curProjectId,
      projects: action.projects
    });
  }

};

/**
 * 根据 actionType 调用对应的 reducer
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export default function header (state = initialState, action) {
  let reducer = Reducers[action.type];
  if (reducer) {
    return reducer(state, action);
  }
  else {
    return state;
  }
}