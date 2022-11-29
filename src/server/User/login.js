/*
 * @FilePath: \Furnace\src\server\User\login.js
 * @Author: maggot-code
 * @Date: 2022-11-29 15:52:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 20:28:52
 * @Description: 
 */
import MockResponse from "@/assets/mock/user.login.json?raw";

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
        }, 6400);
    });
}

export const LoginServer = service.define({
    url: "/user/login",
    method: "POST"
});

export function abortLogin() {
    service.abort(LoginServer);
}

export function obtainLogin(data) {
    abortLogin();

    LoginServer.config.bind("data", data);
    LoginServer.config.bind("adapter", mockAdapter);

    return service.send(LoginServer);
}

export default LoginServer;
