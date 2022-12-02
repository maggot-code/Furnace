/*
 * @FilePath: \Furnace\src\server\template\form\index.js
 * @Author: maggot-code
 * @Date: 2022-12-02 16:39:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 16:43:15
 * @Description: 
 */
import { service } from "@/service/model/Application";

export const FormStructServer = service.define();

export function abortFormStruct() {
    service.abort(FormStructServer);
};

export function obtainFormStruct({ url, method, params }) {
    abortFormStruct();

    FormStructServer.config.bind("url", url);
    FormStructServer.config.bind("method", method);
    FormStructServer.config.bind("params", params);

    return service.send(FormStructServer);
};

export default FormStructServer;
