import * as act from 'constants/ActionTypes';

/**
 * 系统管理 -- 切换导航
 * @param  {[type]} curNavId 当前点击的导航的 ID
 * @return {[type]}          [description]
 */
export function switchNavItem (curNavId) {
  return {
    type: act.SYS_SWITCH_NAV,
    curNavId
  };
}