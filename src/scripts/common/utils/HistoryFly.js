let { browserHistory } = ReactRouter;


export default {
  /**
   * 跳转到指定的路径下
   * @param  {[type]} path [description]
   * @param  {[type]} id   [description]
   * @return {[type]}      [description]
   */
  go (path, id) {
    if (id) {
      path = path.replace(':id', id);
    }
    browserHistory.push(path);
  }
}