const { connect } = ReactRedux;
const { bindActionCreators } = Redux;

/**
 * 生成 mapDispatchToProps 对象
 *   使用 bindActionCreators 方法封装 actionCreator
 * @param {[type]} propsMap [description]
 * @param {[type]} dispatch [description]
 */
function setMapDispatchToProps (dispatch, propsMap, ClassDefine) {
  let mapDispatchToProps = {}, key = '', item = null;
  for(key in propsMap) {
    item = propsMap[key];
    if (!item) {
      console.error(`mapDispatchToProps.${key} is undefined! please check your component Class: ${ClassDefine.name}`);
    }
    mapDispatchToProps[key] = bindActionCreators(item, dispatch);
  }
  return mapDispatchToProps;
}

/**
 * 封装 connect 方法， 在组件内以更简洁的方式调用 stateToProps 和 dispatchToProps
 * @param  {[type]} ClassDefine [description]
 * @return {[type]}             [description]
 */
module.exports = function ReduxConnect (ClassDefine) {
  if (typeof ClassDefine === 'function' && 
      typeof ClassDefine.mapToRedux === 'object' && 
      typeof ClassDefine.mapToRedux.mapStateToProps === 'function' && 
      typeof ClassDefine.mapToRedux.mapDispatchToProps === 'object'
  ) {
    const mapToRedux = ClassDefine.mapToRedux;
    return connect(
      mapToRedux.mapStateToProps,
      (dispatch) => setMapDispatchToProps(dispatch, mapToRedux.mapDispatchToProps, ClassDefine)
    )(ClassDefine);
  }
  else {
    console.error(
      `ReduxConnect can not connect this Class, 
      because the Class.mapToRedux is invalid, 
      please make sure Class.mapToRedux.mapStateToProps is a function, 
      ClassDefine.mapToRedux.mapDispatchToProps is a object`
    );
  }
}

