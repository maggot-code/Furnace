/*
 * @FilePath: \Furnace\src\server\template\config\index.js
 * @Author: maggot-code
 * @Date: 2022-12-02 00:47:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 11:28:08
 * @Description: 
 */
import { service } from "@/service/model/Application";

export const ServerAddress = "/Common/config";
export const ServerMethod = "GET";

export const ConfigCurdServer = service.define({
    url: ServerAddress,
    method: ServerMethod
});

export function abortConfigCurd() {
    service.abort(ConfigCurdServer);
};

export function obtainCurdConfig(params) {
    abortConfigCurd();

    ConfigCurdServer.config.bind("params", params);

    return service.send(ConfigCurdServer);
};

export default ConfigCurdServer;
