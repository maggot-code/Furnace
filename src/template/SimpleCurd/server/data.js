/*
 * @FilePath: /Furnace/src/template/SimpleCurd/server/data.js
 * @Author: maggot-code
 * @Date: 2022-11-27 20:17:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 01:46:28
 * @Description: 
 */
import MockData from "@/assets/mock/curd.data.json";

import { service } from "@/service/model/Application";

// Mock Data用例
function mockDataAdapter(config) {
    return new Promise((resolve, reject) => {
        resolve({
            data: MockData,
            headers: {},
            status: 200,
            statusText: 'OK',
            config,
        });
    });
}

export const DataCurdServer = service.define();

export function abortDataCurd() {
    service.abort(DataCurdServer);
}

export function obtainDataCurd({ url, method, params, data }) {
    DataCurdServer.config.bind("url", url);
    DataCurdServer.config.bind("method", method);
    DataCurdServer.config.bind("params", params);
    DataCurdServer.config.bind("data", data);
    DataCurdServer.config.bind("adapter", mockDataAdapter);

    abortDataCurd();
    return service.send(DataCurdServer);
}

export default obtainDataCurd;
