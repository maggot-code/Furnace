/*
 * @FilePath: \Furnace\src\server\curd\data\index.js
 * @Author: maggot-code
 * @Date: 2022-12-05 09:37:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-08 11:04:54
 * @Description: 
 */
import { RequestMapper } from "./config";
import { service } from "@/service/Application";
import { useMapper } from "@/hooks/service/useMapper";
import { transFormData } from "~/shared/trans";
import { filterObjectEmpty } from "~/shared/filter";
import { isMock } from "~/mock";

const { objectMapper } = useMapper(RequestMapper);

function transData(source) {
    return isMock() ? source : transFormData(source);
}

export const CurdDataServer = service.define();

export function CurdDataSetup(config) {
    const params = objectMapper(config.params);
    const data = transData(filterObjectEmpty(get(config, "data", {})));
    CurdDataServer.server.config.bind("url", config.url);
    CurdDataServer.server.config.bind("method", config.method);
    CurdDataServer.server.config.bind("params", params);
    CurdDataServer.server.config.bind("data", data);
}

export default CurdDataServer;
