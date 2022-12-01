/*
 * @FilePath: /Furnace/src/domain/Curd/server/layout/network.js
 * @Author: maggot-code
 * @Date: 2022-12-02 00:47:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 01:17:11
 * @Description: 
 */
import { service } from "@/service/model/Application";
import toMock from "./mock";

export const SearchCurdServer = service.define();
export const TableCurdServer = service.define();

export function abortLayoutCurd() {
    service.abort(SearchCurdServer);
    service.abort(TableCurdServer);
}

export function obtainLayoutCurd({ search, table }) {
    abortLayoutCurd();
    toMock(search, table);

    SearchCurdServer.config.bind("url", search.url);
    SearchCurdServer.config.bind("method", search.method);

    TableCurdServer.config.bind("url", table.url);
    TableCurdServer.config.bind("method", table.method);

    return service.sendAll([SearchCurdServer, TableCurdServer]);
}

export default obtainLayoutCurd;
