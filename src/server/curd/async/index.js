/*
 * @FilePath: \Furnace\src\server\curd\async\index.js
 * @Author: maggot-code
 * @Date: 2022-12-06 00:05:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 11:30:11
 * @Description: 
 */
import { service } from "@/service/Application";
import { transFormData } from "~/shared/trans";
import { isMock } from "~/mock";

function transData(source) {
    return isMock() ? source : transFormData(source);
}


export const CurdAsyncServer = service.define();

export function CurdAsyncSetup(config) {
    const data = transData(get(config, "data", {}));
    CurdAsyncServer.server.config.bind("url", config.url);
    CurdAsyncServer.server.config.bind("method", config.method);
    CurdAsyncServer.server.config.bind("params", config.params);
    CurdAsyncServer.server.config.bind("data", data);
}

export default CurdAsyncServer;
