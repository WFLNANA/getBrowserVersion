/*
 * @Author: wfl
 * @LastEditors: wfl
 * @description: 
 * @updateInfo: 本次更新内容：
 * @Date: 2021-03-24 11:00:08
 * @LastEditTime: 2021-03-24 11:41:23
 */
import getNavigator from './getNavigator'
import getBrowserType from './brower'
const getIEversion = () => {
    const userAgent = getNavigator();
    if ((userAgent.includes("compatible") && userAgent.includes("MSIE") && getBrowserType() !== 'Opera') || (userAgent.includes("rv:11.0"))) {
        if (userAgent.includes("MSIE 6.0")) {
            return "IE6";
        }
        if (userAgent.includes("MSIE 7.0")) {
            return "IE7";
        }
        if (userAgent.includes("MSIE 8.0") || (userAgent.includes("MSIE 9.0") && !window.innerWidth)) {
            return "IE8";
        }
        if (userAgent.includes("MSIE 9.0")) {
            return "IE9";
        }
        if (userAgent.includes("MSIE 10.0")) {
            return "IE10";
        }
        if (userAgent.includes("MSIE 11.0")) {
            return "IE11";
        }
        if (getBrowserType() === 'Edge') {
            return 'Edge'
        }
        return "IE";
    }
    return false
}
export default getIEversion