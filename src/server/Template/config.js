/*
 * @FilePath: \Furnace\src\server\Template\config.js
 * @Author: maggot-code
 * @Date: 2022-11-26 15:25:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 17:07:41
 * @Description: 
 */
import { service } from "@/service/model/Application";

export const ConfigCurdServer = service.define({
    url: "/template/config",
});

export function abortConfigCurd() {
    service.abort(ConfigCurdServer);
}

export function obtainCurdConfig(params) {
    console.log(params);
    abortConfigCurd();

    ConfigCurdServer.config.bind("params", params);

    return service.send(ConfigCurdServer);
}

export default ConfigCurdServer;
