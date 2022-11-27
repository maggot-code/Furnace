/*
 * @FilePath: /Furnace/src/server/Template/config.js
 * @Author: maggot-code
 * @Date: 2022-11-26 15:25:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 23:56:07
 * @Description: 
 */
import MockResponse from "@/assets/mock/curd.config.json";

import { service } from "@/service/model/Application";

// Mock用例
function mockAdapter(config) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: MockResponse,
                headers: {},
                status: 200,
                statusText: 'OK',
                config,
            });
        }, 1200);
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
