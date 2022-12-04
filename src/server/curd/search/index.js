/*
 * @FilePath: /Furnace/src/server/curd/search/index.js
 * @Author: maggot-code
 * @Date: 2022-12-05 00:17:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 00:20:25
 * @Description: 
 */
import { service } from "@/service/Application";

export const CurdSearchServer = service.define();

export function CurdSearchSetup(config) {
    CurdSearchServer.server.config.bind("url", config.url);
    CurdSearchServer.server.config.bind("method", config.method);
}

export default CurdSearchServer;
