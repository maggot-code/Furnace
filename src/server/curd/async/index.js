/*
 * @FilePath: /Furnace/src/server/curd/async/index.js
 * @Author: maggot-code
 * @Date: 2022-12-06 00:05:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 00:43:57
 * @Description: 
 */
import { service } from "@/service/Application";

export const CurdAsyncServer = service.define();

export function CurdAsyncSetup(config) {
    CurdAsyncServer.server.config.bind("url", config.url);
    CurdAsyncServer.server.config.bind("method", config.method);
    CurdAsyncServer.server.config.bind("params", config.params);
    CurdAsyncServer.server.config.bind("data", config.data);
}

export default CurdAsyncServer;
