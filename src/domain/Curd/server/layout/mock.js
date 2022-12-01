/*
 * @FilePath: /Furnace/src/domain/Curd/server/layout/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-02 00:47:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 00:57:51
 * @Description: 
 */
import Mock from "mockjs";
import SearchResponse from "./search.json";
import TableResponse from "./table.json";

export default (search, table) => {
    const searchUrl = import.meta.env.VITE_APP_SERVER_PREFIX + search.url;
    const searchMethod = toLower(search.method);
    const tablehUrl = import.meta.env.VITE_APP_SERVER_PREFIX + table.url;
    const tableMethod = toLower(table.method);

    Mock.mock(searchUrl, searchMethod, (props) => SearchResponse);
    Mock.mock(tablehUrl, tableMethod, (props) => TableResponse);
}
