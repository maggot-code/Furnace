/*
 * @FilePath: /Furnace/src/server/User/login/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-01 21:39:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 22:10:53
 * @Description: 
 */
import Mock from "mockjs";
import Response from "./response.json";
import { ServerAddress, ServerMethod } from "./network";

const url = import.meta.env.VITE_APP_SERVER_PREFIX + ServerAddress;
const method = toLower(ServerMethod);

Mock.mock(url, method, (props) => Response);
