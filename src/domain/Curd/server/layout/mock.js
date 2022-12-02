/*
 * @FilePath: \Furnace\src\domain\Curd\server\layout\mock.js
 * @Author: maggot-code
 * @Date: 2022-12-02 00:47:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 11:35:44
 * @Description: 
 */
import Mock from "mockjs";
import SearchResponse from "./search.json";
import TableResponse from "./table.json";

const SearchAddress = "/curd/search";
const SearchMethod = "GET";
const TableAddress = "/curd/table";
const TableMethod = "GET";
const searchUrl = import.meta.env.VITE_APP_SERVER_PREFIX + SearchAddress;
const searchMethod = toLower(SearchMethod);
const tableUrl = import.meta.env.VITE_APP_SERVER_PREFIX + TableAddress;
const tableMethod = toLower(TableMethod);

export default () => {
    Mock.mock(searchUrl, searchMethod, (props) => {
        console.log(props);
        return SearchResponse;
    });

    Mock.mock(tableUrl, tableMethod, (props) => {
        console.log(props);
        return TableResponse;
    });
}
