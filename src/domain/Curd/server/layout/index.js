/*
 * @FilePath: \Furnace\src\domain\Curd\server\layout\index.js
 * @Author: maggot-code
 * @Date: 2022-12-02 00:47:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 13:56:04
 * @Description: 
 */
import { service } from "@/service/model/Application";

export const SearchCurdServer = service.define();
export const TableCurdServer = service.define();

export function abortLayoutCurd() {
    return Promise.allSettled([
        service.abort(SearchCurdServer),
        service.abort(TableCurdServer)
    ]);
}

export function obtainLayoutCurd({ search, table }) {
    abortLayoutCurd();

    SearchCurdServer.config.bind("url", search.url);
    SearchCurdServer.config.bind("method", search.method);
    SearchCurdServer.config.bind("params", search.params);

    TableCurdServer.config.bind("url", table.url);
    TableCurdServer.config.bind("method", table.method);
    TableCurdServer.config.bind("params", table.params);

    return service.sendAll([SearchCurdServer, TableCurdServer]);
}

export default obtainLayoutCurd;
