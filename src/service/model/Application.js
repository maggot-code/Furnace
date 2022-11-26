/*
 * @FilePath: /Furnace/src/service/model/Application.js
 * @Author: maggot-code
 * @Date: 2022-11-24 10:05:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 15:36:45
 * @Description: 
 */
import axios from "axios";
import { defineService } from "@/service/defineService";

const define = axios.create({
    baseURL: "/api",
    timeout: import.meta.env.DEV ? 0 : 30000,
});

function transResponse(response) {
    return response.data;
}

export const service = defineService(define, {
    transResponse
});

export default service;
