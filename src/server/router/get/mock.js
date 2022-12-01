/*
 * @FilePath: /Furnace/src/server/Router/get/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-01 21:31:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 22:17:35
 * @Description: 
 */
import Mock from "mockjs";
import Response from "./response.json";
import { ServerAddress, ServerMethod } from "./network";

const url = import.meta.env.VITE_APP_SERVER_PREFIX + ServerAddress;
const method = toLower(ServerMethod);

Mock.mock(url, method, Response);
