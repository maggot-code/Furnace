/*
 * @FilePath: \Furnace\src\server\curd\data\index.js
 * @Author: maggot-code
 * @Date: 2022-12-05 09:37:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 18:43:13
 * @Description: 
 */
import { RequestMapper } from "./config";
import { service } from "@/service/Application";
import { useMapper } from "@/hooks/service/useMapper";

const { objectMapper } = useMapper(RequestMapper);

export const CurdDataServer = service.define();

export function CurdDataSetup(config) {
    CurdDataServer.server.config.bind("url", config.url);
    CurdDataServer.server.config.bind("method", config.method);
    CurdDataServer.server.config.bind("data", config.data);
    CurdDataServer.server.config.bind("params", objectMapper(config.params));
}

export default CurdDataServer;
