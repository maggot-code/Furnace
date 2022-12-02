/*
 * @FilePath: \Furnace\src\server\user\login\mock.js
 * @Author: maggot-code
 * @Date: 2022-12-01 21:39:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 11:27:34
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
