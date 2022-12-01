/*
 * @FilePath: \Furnace\src\domain\Curd\server\layout.js
 * @Author: maggot-code
 * @Date: 2022-11-26 15:41:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 17:07:15
 * @Description: 
 */
import { service } from "@/service/model/Application";

export const SearchCurdServer = service.define();
export const TableCurdServer = service.define();

export function abortLayoutCurd() {
    service.abort(SearchCurdServer);
    service.abort(TableCurdServer);
}

export function obtainLayoutCurd({ search, table }) {
    abortLayoutCurd();

    SearchCurdServer.config.bind("url", search.url);
    SearchCurdServer.config.bind("method", search.method);

    TableCurdServer.config.bind("url", table.url);
    TableCurdServer.config.bind("method", table.method);

    return service.sendAll([SearchCurdServer, TableCurdServer]);
}

export default obtainLayoutCurd;
