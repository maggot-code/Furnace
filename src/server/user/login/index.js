/*
 * @FilePath: /Furnace/src/server/user/login/index.js
 * @Author: maggot-code
 * @Date: 2022-12-04 02:16:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 05:35:33
 * @Description: 
 */
import { Address, Method, RequestMapper, ResponseMapper } from "./config";
import { service } from "@/service/Application";
import { transFormData } from "~/shared/trans";
import { isMock } from "~/mock";
import { useMapper } from "@/hooks/service/useMapper";

const { objectMapper: toRequest } = useMapper(RequestMapper);
const { objectMapper: toResponse } = useMapper(ResponseMapper);
function transRequest(rawSource) {
    const source = toRequest(rawSource);
    return isMock() ? source : transFormData(source);
}
function transResponse(response) {
    const source = get(response, "data.data", {});
    return toResponse(source);
}

export const UserLoginServer = service.define({
    url: Address,
    method: Method,
});

export function UserLoginObtain(source) {
    UserLoginServer.server.config.bind("data", transRequest(source));

    return UserLoginServer.obtain({ transResponse });
}

export default UserLoginServer;
