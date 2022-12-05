/*
 * @FilePath: /Furnace/src/server/curd/layout.js
 * @Author: maggot-code
 * @Date: 2022-12-05 00:21:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 01:21:21
 * @Description: 
 */
import { ConfigCurdServer } from "../config/curd";
import { CurdSearchServer, CurdSearchSetup } from "../curd/search";
import { CurdTableServer, CurdTableSetup } from "../curd/table";
import { CurdDataServer, CurdDataSetup } from "../curd/data";
import { CurdAsyncServer, CurdAsyncSetup } from "./async";

import { service } from "@/service/Application";
import { mergeObject } from "~/shared/merge";
import { filterObjectEmpty } from "~/shared/filter";

export function CurdLayoutObtain() {
    const { search, table } = unref(ConfigCurdServer.server.result.source);
    CurdSearchSetup(search);
    CurdTableSetup(table);

    return service.sendAll([
        CurdSearchServer.server,
        CurdTableServer.server
    ]);
}

export function CurdDataObtain(factor) {
    const { source } = unref(ConfigCurdServer.server.result.source);
    const options = {
        params: factor.params,
        data: filterObjectEmpty(get(factor, "data", {}))
    }
    CurdDataSetup(mergeObject(source, options));

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
    const { save } = unref(ConfigCurdServer.server.result.source);
    const params = pick(factor, "id");
    CurdAsyncSetup(mergeObject(save, { params, data }));

    return service.send(CurdAsyncServer.server);
}

export function CurdDeleteObtain(params) {
    const config = unref(ConfigCurdServer.server.result.source);
    CurdAsyncSetup(mergeObject(config.delete, { params }));

    return service.send(CurdAsyncServer.server);
}

export function CurdExportObtain() {
    const config = unref(ConfigCurdServer.server.result.source);
    CurdAsyncSetup(mergeObject(config.export));

    return service.send(CurdAsyncServer.server);
}

export default CurdLayoutObtain;
