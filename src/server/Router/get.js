/*
 * @FilePath: \Furnace\src\server\Router\get.js
 * @Author: maggot-code
 * @Date: 2022-11-24 11:43:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 17:07:34
 * @Description: 
 */
import { service } from "@/service/model/Application";

export const GetRouterServer = service.define({
    url: "/router/get",
});

export function abortGetRouter() {
    service.abort(GetRouterServer);
}

export function obtainGetRouter() {
    abortGetRouter();

    return service.send(GetRouterServer);
}

export default GetRouterServer;
