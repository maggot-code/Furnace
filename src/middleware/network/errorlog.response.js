/*
 * @FilePath: \Furnace\src\middleware\network\errorlog.response.js
 * @Author: maggot-code
 * @Date: 2022-12-06 09:24:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 09:24:21
 * @Description: 
 */
const CodeGroup = ["ERR_CANCELED"];

function define(response) {
    return response;
}

function defineError(error) {
    // TODO..
    if (!CodeGroup.includes(error.code)) {
        // console.log("error log:", error);
    }

    return Promise.reject(error);
}

export default (server) => server.interceptors.response.use(define, defineError);
