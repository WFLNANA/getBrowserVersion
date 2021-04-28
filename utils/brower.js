/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-03-24 10:47:08
 * @LastEditTime: 2021-03-24 11:40:00
 */
import getNavigator from './getNavigator'
import getIEversion from './getIEversion'
const getBrowserType = () => {
    const userAgent = getNavigator()
    if (userAgent.includes('Opera')) {
        return 'Opera'
    }
    if (userAgent.includes("Firefox")) {
        return "Firefox";
    }
    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
        return "Chrome";
    }
    if (userAgent.includes("Safari") && !userAgent.includes("Edg")) {
        return "Safari";
    }
    if (userAgent.includes("Edg")) {
        return "Edge";
    } else {
        getIEversion()
    }
    return '';
}
export default getBrowserType