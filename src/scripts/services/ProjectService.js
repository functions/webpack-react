import projectData from './projects.json';

const TIMEOUT = 100;

export default {

  // 获取所有的项目
  getProjects() {
    return new Promise((resolve) => {
      setTimeout(() => { resolve(projectData.data); }, TIMEOUT);
    });
  },

  // 新增项目
  addProject(data, cb) {
    setTimeout(() => cb(), TIMEOUT);
  }

};