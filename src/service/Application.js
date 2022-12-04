/*
 * @FilePath: /Furnace/src/service/Application.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:05:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 04:30:13
 * @Description: 
 */
import axios from "axios";

import { defineService } from "~/service";

const define = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_PREFIX,
    timeout: import.meta.env.DEV ? 0 : 30000,
});

function transResponse(response) {
    return get(response, "data.data", {});
}

export const service = defineService(define, { transResponse });

export default service;
