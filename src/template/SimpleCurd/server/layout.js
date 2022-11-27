/*
 * @FilePath: /Furnace/src/template/SimpleCurd/server/layout.js
 * @Author: maggot-code
 * @Date: 2022-11-26 15:41:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 23:07:23
 * @Description: 
 */
import MockSearch from "@/assets/mock/curd.search.json";
import MockTable from "@/assets/mock/curd.table.json";

import { service } from "@/service/model/Application";

// Mock Search用例
function mockSearchAdapter(config) {
    return new Promise((resolve, reject) => {
        resolve({
            data: MockSearch,
            headers: {},
            status: 200,
            statusText: 'OK',
            config,
        });
    });
}

// Mock Table用例
function mockTableAdapter(config) {
    return new Promise((resolve, reject) => {
        resolve({
            data: MockTable,
            headers: {},
            status: 200,
            statusText: 'OK',
            config,
        });
    });
}

export const SearchCurdServer = service.define();
export const TableCurdServer = service.define();

export function abortLayoutCurd() {
    service.abort(SearchCurdServer);
    service.abort(TableCurdServer);
}

export function obtainLayoutCurd({ search, table }) {
    SearchCurdServer.config.bind("url", search.url);
    SearchCurdServer.config.bind("method", search.method);
    SearchCurdServer.config.bind("adapter", mockSearchAdapter);

    TableCurdServer.config.bind("url", table.url);
    TableCurdServer.config.bind("method", table.method);
    TableCurdServer.config.bind("adapter", mockTableAdapter);

    abortLayoutCurd();
    return service.sendAll([SearchCurdServer, TableCurdServer]);
}

export default obtainLayoutCurd;
