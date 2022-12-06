/*
 * @FilePath: \Furnace\src\middleware\network\datatype.request.js
 * @Author: maggot-code
 * @Date: 2022-12-06 18:00:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 18:08:20
 * @Description: 
 */
// import {transFormData } from "~/shared/trans";

function define(config) {
    return config;
}

export default (server) => server.interceptors.request.use(define);
