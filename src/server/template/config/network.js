/*
 * @FilePath: /Furnace/src/server/template/config/network.js
 * @Author: maggot-code
 * @Date: 2022-12-02 00:47:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 01:00:14
 * @Description: 
 */
import { service } from "@/service/model/Application";

export const ServerAddress = "/template/config";
export const ServerMethod = "GET";

export const ConfigCurdServer = service.define({
    url: ServerAddress,
    method: ServerMethod
});

export function abortConfigCurd() {
    service.abort(ConfigCurdServer);
};

export function obtainCurdConfig(data) {
    console.log(data);
    abortConfigCurd();

    ConfigCurdServer.config.bind("data", data);

    return service.send(ConfigCurdServer);
};

export default ConfigCurdServer;
