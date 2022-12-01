/*
 * @FilePath: /Furnace/src/server/User/login/network.js
 * @Author: maggot-code
 * @Date: 2022-12-01 21:39:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 21:49:59
 * @Description: 
 */
import { service } from "@/service/model/Application";

export const ServerAddress = "/user/login";
export const ServerMethod = "POST";

export const LoginServer = service.define({
    url: ServerAddress,
    method: ServerMethod
});

export function abortLogin() {
    service.abort(LoginServer);
};

export function obtainLogin(data) {
    abortLogin();

    LoginServer.config.bind("data", data);

    return service.send(LoginServer);
};

export default LoginServer;
