/*
 * @FilePath: /Furnace/src/server/config/form/index.js
 * @Author: maggot-code
 * @Date: 2022-12-04 21:37:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 21:50:00
 * @Description: 
 */
import { Address, Method } from "./config";
import { service } from "@/service/Application";

export const ConfigFormServer = service.define({
    url: Address,
    method: Method,
});

export function ConfigFormObtain(props) {
    const params = { cid: unref(props).id };
    ConfigFormServer.server.config.bind("params", params);

    return ConfigFormServer.obtain();
}

export default ConfigFormServer;
