import * as act from 'constants/ActionTypes';
import ProjectService from 'services/ProjectService';

/**
 * 我的项目 - 我的项目列表
 * @param  {[type]} curProjectId 当前选中的项目 ID
 * @return {[type]}          [description]
 */
export function switchProject (curProjectId) {
  return {
    type: act.MY_SWITCH_PROJECT,
    curProjectId
  };
}

/**
 * 我的项目 - 获取项目列表
 * @return {[type]} [description]
 */
export function fetchProjects () {
  return (dispatch) => {
    ProjectService.getProjects().then(projects => {
      dispatch({
        type: act.MY_FETCH_PROJECTS,
        projects
      });
    });
  };
}

/**
 * 我的项目 - 切换导航
 * @param  {[type]} curNavId 当前点击的导航的 ID
 * @return {[type]}          [description]
 */
export function switchNavItem (curNavId) {
  return {
    type: act.MY_SWITCH_NAV,
    curNavId
  };
}