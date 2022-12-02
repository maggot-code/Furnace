/*
 * @FilePath: \Furnace\src\server\router\get\index.js
 * @Author: maggot-code
 * @Date: 2022-12-01 21:31:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 17:46:17
 * @Description: 
 */
import { service } from "@/service/model/Application";

export const ServerAddress = "/SystemManage/SM_Router/GetSMRouterListByUser.do";
export const ServerMethod = "POST";

export const GetRouterServer = service.define({
    url: ServerAddress,
    method: ServerMethod
});

export function abortGetRouter() {
    service.abort(GetRouterServer);
};

export function obtainGetRouter() {
    abortGetRouter();

    return service.send(GetRouterServer);
};

export default GetRouterServer;
