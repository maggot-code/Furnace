/*
 * @FilePath: \Furnace\src\server\template\form\mock.js
 * @Author: maggot-code
 * @Date: 2022-12-02 16:39:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 16:44:32
 * @Description: 
 */
import Mock from "mockjs";
import Response from "./response.json";

const ServerAddress = "/form/struct";
const ServerMethod = "GET";
const url = import.meta.env.VITE_APP_SERVER_PREFIX + ServerAddress;
const method = toLower(ServerMethod);

export default () => {
    Mock.mock(new RegExp(`^${url}.*`), method, (props) => {
        console.log(props);
        return Response;
    });
}
