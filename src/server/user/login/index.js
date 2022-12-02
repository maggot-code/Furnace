/*
 * @FilePath: \Furnace\src\server\user\login\index.js
 * @Author: maggot-code
 * @Date: 2022-12-01 21:39:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 17:45:45
 * @Description: 
 */
import { service } from "@/service/model/Application";
import { mergePlainObject } from "@/shared/trans";

function transResponse(response) {
    const { data } = response.data;

    return mergePlainObject(data, {
        activeRole: data.roletype,
        name: data.truename
    });
}

export const ServerAddress = "/signin_vue";
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

    return service.send(LoginServer, {
        transResponse
    });
};

export default LoginServer;
