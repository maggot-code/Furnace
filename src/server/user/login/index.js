/*
 * @FilePath: \Furnace\src\server\user\login\index.js
 * @Author: maggot-code
 * @Date: 2022-12-01 21:39:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 11:26:29
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
