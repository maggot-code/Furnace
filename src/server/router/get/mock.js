/*
 * @FilePath: \Furnace\src\server\router\get\mock.js
 * @Author: maggot-code
 * @Date: 2022-12-01 21:31:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 11:29:16
 * @Description: 
 */
import Mock from "mockjs";
import Response from "./response.json";
import { ServerAddress, ServerMethod } from "./index";

const url = import.meta.env.VITE_APP_SERVER_PREFIX + ServerAddress;
const method = toLower(ServerMethod);

export default () => {
    Mock.mock(url, method, (props) => {
        console.log(props);
        return Response;
    });
}
