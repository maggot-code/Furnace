/*
 * @FilePath: /Furnace/src/server/Template/config.js
 * @Author: maggot-code
 * @Date: 2022-11-26 15:25:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-28 01:46:22
 * @Description: 
 */
import MockResponse from "@/assets/mock/curd.config.json";

import { service } from "@/service/model/Application";

// Mock用例
function mockAdapter(config) {
    return new Promise((resolve, reject) => {
        resolve({
            data: MockResponse,
            headers: {},
            status: 200,
            statusText: 'OK',
            config,
        });
    });
}

export const ConfigCurdServer = service.define({
    url: "/template/config",
});

export function abortConfigCurd() {
    service.abort(ConfigCurdServer);
}

export function obtainCurdConfig(params) {
    ConfigCurdServer.config.bind("adapter", mockAdapter);
    ConfigCurdServer.config.bind("params", params);

    abortConfigCurd();
    return service.send(ConfigCurdServer);
}

export default ConfigCurdServer;
