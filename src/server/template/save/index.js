/*
 * @FilePath: \Furnace\src\server\template\save\index.js
 * @Author: maggot-code
 * @Date: 2022-12-02 16:56:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 17:07:13
 * @Description: 
 */
import { service } from "@/service/model/Application";

export const FormSaveServer = service.define();

export function abortFormSave() {
    service.abort(FormSaveServer);
};

export function obtainFormSave({ url, method, params, data }) {
    abortFormSave();

    FormSaveServer.config.bind("url", url);
    FormSaveServer.config.bind("method", method);
    FormSaveServer.config.bind("params", params);
    FormSaveServer.config.bind("data", data);

    return service.send(FormSaveServer);
};

export default FormSaveServer;
