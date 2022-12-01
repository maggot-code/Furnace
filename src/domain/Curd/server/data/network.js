/*
 * @FilePath: /Furnace/src/domain/Curd/server/data/network.js
 * @Author: maggot-code
 * @Date: 2022-12-02 00:47:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 01:56:37
 * @Description: 
 */
import { service } from "@/service/model/Application";
import toMock from "./mock";

export const DataCurdServer = service.define();

export function abortDataCurd() {
    service.abort(DataCurdServer);
};

export function obtainDataCurd({ url, method, params, data }) {
    abortDataCurd();
    toMock(url, method);

    DataCurdServer.config.bind("url", url);
    DataCurdServer.config.bind("method", method);
    DataCurdServer.config.bind("params", params);
    DataCurdServer.config.bind("data", data);

    return service.send(DataCurdServer);
};

export default DataCurdServer;
