/*
 * @FilePath: \Furnace\src\server\User\login.js
 * @Author: maggot-code
 * @Date: 2022-11-29 15:52:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 17:05:44
 * @Description: 
 */
import { service } from "@/service/model/Application";

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

    return service.send(LoginServer);
}

export default LoginServer;
