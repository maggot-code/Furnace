/*
 * @FilePath: \Furnace\src\domain\Curd\server\data.js
 * @Author: maggot-code
 * @Date: 2022-11-27 20:17:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 17:07:05
 * @Description: 
 */
import { service } from "@/service/model/Application";

export const DataCurdServer = service.define();

export function abortDataCurd() {
    service.abort(DataCurdServer);
}

export function obtainDataCurd({ url, method, params, data }) {
    abortDataCurd();

    DataCurdServer.config.bind("url", url);
    DataCurdServer.config.bind("method", method);
    DataCurdServer.config.bind("params", params);
    DataCurdServer.config.bind("data", data);

    return service.send(DataCurdServer);
}

export default obtainDataCurd;
