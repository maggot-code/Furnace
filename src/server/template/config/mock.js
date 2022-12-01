/*
 * @FilePath: /Furnace/src/server/template/config/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-02 00:47:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 00:47:21
 * @Description: 
 */
import Mock from "mockjs";
import Response from "./response.json";
import { ServerAddress, ServerMethod } from "./network";

const url = import.meta.env.VITE_APP_SERVER_PREFIX + ServerAddress;
const method = toLower(ServerMethod);

Mock.mock(url, method, (props) => Response);
