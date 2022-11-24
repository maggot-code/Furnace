/*
 * @FilePath: \Furnace\src\service\model\Application.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:05:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 11:42:32
 * @Description: 
 */
import axios from "axios";
import { defineService } from "@/service/defineService";

const define = axios.create({
    baseURL: "/api",
    timeout: import.meta.env.DEV ? 0 : 30000,
});

export const service = defineService(define);

export default service;
