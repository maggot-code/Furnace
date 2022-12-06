/*
 * @FilePath: \Furnace\src\server\curd\search\index.js
 * @Author: maggot-code
 * @Date: 2022-12-05 00:17:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 10:00:27
 * @Description: 
 */
import { service } from "@/service/Application";

export const CurdSearchServer = service.define();

export function CurdSearchSetup(config) {
    CurdSearchServer.server.config.bind("url", config.url);
    CurdSearchServer.server.config.bind("method", config.method);
    CurdSearchServer.server.config.bind("params", config.params);
}

export default CurdSearchServer;
