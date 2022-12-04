/*
 * @FilePath: /Furnace/src/server/curd/table/index.js
 * @Author: maggot-code
 * @Date: 2022-12-05 00:18:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 00:20:09
 * @Description: 
 */
import { service } from "@/service/Application";

export const CurdTableServer = service.define();

export function CurdTableSetup(config) {
    CurdTableServer.server.config.bind("url", config.url);
    CurdTableServer.server.config.bind("method", config.method);
}

export default CurdTableServer;
