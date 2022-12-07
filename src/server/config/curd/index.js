/*
 * @FilePath: \Furnace\src\server\config\curd\index.js
 * @Author: maggot-code
 * @Date: 2022-12-04 22:25:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 17:44:38
 * @Description: 
 */
import { ConfigAddress, ConfigMethod } from "./config";
import { service } from "@/service/Application";

export const ConfigCurdServer = service.define({
    url: ConfigAddress,
    method: ConfigMethod,
});

export function ConfigCurdObtain(props) {
    const params = { cid: unref(props).id };
    ConfigCurdServer.server.config.bind("params", params);

    return ConfigCurdServer.obtain();
}

export default ConfigCurdServer;
