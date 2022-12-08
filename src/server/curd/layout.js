/*
 * @FilePath: \Furnace\src\server\curd\layout.js
 * @Author: maggot-code
 * @Date: 2022-12-05 00:21:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-08 11:03:11
 * @Description: 
 */
import { ConfigCurdServer } from "../config/curd";
import { CurdSearchServer, CurdSearchSetup } from "../curd/search";
import { CurdTableServer, CurdTableSetup } from "../curd/table";
import { CurdDataServer, CurdDataSetup } from "../curd/data";
import { CurdAsyncServer, CurdAsyncSetup } from "./async";

import { service } from "@/service/Application";
import { mergeObject } from "~/shared/merge";

export function CurdLayoutObtain() {
    const config = unref(ConfigCurdServer.server.result.source);
    CurdSearchSetup(get(config, "search", {}));
    CurdTableSetup(get(config, "table", {}));

    return service.sendAll([
        CurdSearchServer.server,
        CurdTableServer.server
    ]);
}

export function CurdDataObtain(factor) {
    const config = unref(ConfigCurdServer.server.result.source);
    const options = {
        params: get(factor, "params", {}),
        data: get(factor, "data", {})
    }
    CurdDataSetup(mergeObject(get(config, "source", {}), options));

    return service.send(CurdDataServer.server);
}

export function CurdFormObtain(mode, factor) {
    const config = unref(ConfigCurdServer.server.result.source);
    const request = get(config, mode, {});
    const params = pick(factor, "id");
    CurdAsyncSetup(mergeObject(request, { params }));

    return service.send(CurdAsyncServer.server);
}

export function CurdSaveObtain(factor, data) {
    const config = unref(ConfigCurdServer.server.result.source);
    const params = pick(factor, "id");
    CurdAsyncSetup(mergeObject(get(config, "save", {}), { params, data }));

    return service.send(CurdAsyncServer.server);
}

export function CurdDeleteObtain(params) {
    const config = unref(ConfigCurdServer.server.result.source);
    CurdAsyncSetup(mergeObject(get(config, "delete", {}), { params }));

    return service.send(CurdAsyncServer.server);
}

export function CurdExportObtain() {
    const config = unref(ConfigCurdServer.server.result.source);
    CurdAsyncSetup(get(config, "export", {}));

    return service.send(CurdAsyncServer.server);
}

export default CurdLayoutObtain;
