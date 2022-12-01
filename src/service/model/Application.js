/*
 * @FilePath: \Furnace\src\service\model\Application.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:05:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 18:06:10
 * @Description: 
 */
import axios from "axios";

import RequestToken from "@/middleware/network/token.request";
import ResponseNotFound from "@/middleware/network/notfound.response";

import { defineService } from "@/service/defineService";

const define = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_PREFIX,
    timeout: import.meta.env.DEV ? 0 : 30000,
});

RequestToken(define);
ResponseNotFound(define);

function transResponse(response) {
    return response.data;
};

export const service = defineService(define, {
    transResponse
});

export default service;
