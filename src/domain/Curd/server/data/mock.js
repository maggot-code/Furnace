/*
 * @FilePath: \Furnace\src\domain\Curd\server\data\mock.js
 * @Author: maggot-code
 * @Date: 2022-12-02 00:47:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 11:34:00
 * @Description: 
 */
import Mock from "mockjs";
import Response from "./response.json";

const ServerAddress = "/curd/source";
const ServerMethod = "POST";
const url = import.meta.env.VITE_APP_SERVER_PREFIX + ServerAddress;
const method = toLower(ServerMethod);

export default () => {
    Mock.mock(url, method, (props) => {
        console.log(props);
        return Response;
    });
}
