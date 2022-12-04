/*
 * @FilePath: /Furnace/src/server/curd/layout.js
 * @Author: maggot-code
 * @Date: 2022-12-05 00:21:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 00:23:11
 * @Description: 
 */
import { ConfigCurdServer } from "../config/curd";
import { CurdSearchServer, CurdSearchSetup } from "../curd/search";
import { CurdTableServer, CurdTableSetup } from "../curd/table";
import { service } from "@/service/Application";

export function CurdLayoutObtain() {
    const { search, table } = unref(ConfigCurdServer.server.result.source);
    CurdSearchSetup(search);
    CurdTableSetup(table);

    return service.sendAll([
        CurdSearchServer.server,
        CurdTableServer.server
    ]);
}

export default CurdLayoutObtain;
