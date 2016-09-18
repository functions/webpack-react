import * as act from 'constants/ActionTypes';

const initialState = {
  projects: []
};

const Reducers = {

  // 获取项目列表
  [act.SYS_FETCH_PROJECTS] (state, action) {
    return Object.assign({}, state, {
      projects: action.projects
    })
  }

};

/**
 * 根据 actionType 调用对应的 reducer
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export default function SysProjects (state = initialState, action) {
  let reducer = Reducers[action.type];
  if (reducer) {
    return reducer(state, action);
  }
  else {
    return state;
  }
}