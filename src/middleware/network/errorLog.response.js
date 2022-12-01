/*
 * @FilePath: /Furnace/src/middleware/network/errorLog.response.js
 * @Author: maggot-code
 * @Date: 2022-12-01 22:14:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 22:16:52
 * @Description: 中断不做记录
 */
function define(response) {
    return response;
}

function defineError(error) {
    // TODO..
    console.log("error log:", error);
    return Promise.reject(error);
}

export default (server) => server.interceptors.response.use(define, defineError);
