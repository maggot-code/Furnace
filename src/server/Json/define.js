/*
 * @FilePath: \Furnace\src\server\Json\define.js
 * @Author: maggot-code
 * @Date: 2022-11-23 17:20:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 17:22:49
 * @Description: 
 */
import axios from "axios";
import { defineService } from "@/service/defineService";

const define = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: import.meta.env.DEV ? 0 : 30000
});

export const server = defineService(define);

export default define;
