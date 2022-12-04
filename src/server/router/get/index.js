/*
 * @FilePath: /Furnace/src/server/router/get/index.js
 * @Author: maggot-code
 * @Date: 2022-12-04 05:25:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 06:18:28
 * @Description: 
 */
import { Address, Method, ResponseMapper } from "./config";
import { service } from "@/service/Application";
import { useMapper } from "@/hooks/service/useMapper";

const { arrayMapper } = useMapper(ResponseMapper);
function transResponse(response) {
    const source = get(response, "data.data", []);
    const data = arrayMapper(source);
    return { data };
}

export const RouterGetServer = service.define({
    url: Address,
    method: Method,
});

export function RouterGetObtain() {
    return RouterGetServer.obtain({ transResponse });
}

export default RouterGetServer;
