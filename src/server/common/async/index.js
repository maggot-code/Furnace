/*
 * @FilePath: /Furnace/src/server/common/async/index.js
 * @Author: maggot-code
 * @Date: 2022-12-06 02:04:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 02:04:31
 * @Description: 
 */
import { service } from "@/service/Application";

export const CommonAsyncServer = service.define();

export function CommonAsyncSetup(config) {
    CommonAsyncServer.server.config.bind("url", config.url);
    CommonAsyncServer.server.config.bind("method", config.method);
    CommonAsyncServer.server.config.bind("params", config.params);
    CommonAsyncServer.server.config.bind("data", config.data);
}

export default CommonAsyncServer;
