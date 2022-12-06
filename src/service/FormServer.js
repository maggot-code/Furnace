/*
 * @FilePath: \Furnace\src\service\FormServer.js
 * @Author: maggot-code
 * @Date: 2022-12-06 10:07:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 10:23:53
 * @Description: 
 */
import axios from "axios";

import RequestToken from "@/middleware/network/token.request";

export const service = axios.create({
    timeout: import.meta.env.DEV ? 0 : 30000,
});

RequestToken(service);
service.interceptors.response.use((response) => response.data);

export default service;
