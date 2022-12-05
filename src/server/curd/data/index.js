/*
 * @FilePath: \Furnace\src\server\curd\data\index.js
 * @Author: maggot-code
 * @Date: 2022-12-05 09:37:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 09:38:00
 * @Description: 
 */
import { service } from "@/service/Application";

export const CurdDataServer = service.define();

export function CurdDataSetup(config) {
    CurdDataServer.server.config.bind("url", config.url);
    CurdDataServer.server.config.bind("method", config.method);
}

export default CurdDataServer;
