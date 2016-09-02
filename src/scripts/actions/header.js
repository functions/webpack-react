import * as act from '../constants/ActionTypes';
import ProjectService from 'services/ProjectService';


// 获取项目列表
export function fetchProjects () {
  return (dispatch) => {
    ProjectService.getProjects().then(projects => {
      dispatch({
        type: act.FETCH_PROJECTS,
        projects
      });
    });
  };
}

// 切换项目
export function switchProject (curProjectId) {
  return {
    type: act.SWITCH_PROJECT,
    curProjectId
  };
}

// 我的项目
export function myProjects () {
  return (dispatch) => {
    ProjectService.getProjects().then(projects => {
      dispatch({
        type: act.MY_PROJECTS,
        curProjectId: '请选择项目',
        projects
      });
    });
  };
}