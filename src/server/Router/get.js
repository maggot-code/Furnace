/*
 * @FilePath: \Furnace\src\server\Router\get.js
 * @Author: maggot-code
 * @Date: 2022-11-24 11:43:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 12:04:03
 * @Description: 
 */
import MockResponse from "@/assets/mock/router.get.json?raw";

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

export const GetRouterServer = service.define({
    url: "/router/get",
});

export function obtainRouter() {
    GetRouterServer.config.bind("adapter", mockAdapter);

    return service.send(GetRouterServer);
}

export default GetRouterServer;
