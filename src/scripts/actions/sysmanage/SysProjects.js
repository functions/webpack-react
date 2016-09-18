import * as act from 'constants/ActionTypes';
import ProjectService from 'services/ProjectService';


// 获取项目列表
export function fetchProjects () {
  return (dispatch) => {
    ProjectService.getProjects().then(projects => {
      dispatch({
        type: act.SYS_FETCH_PROJECTS,
        projects
      });
    });
  };
}