/*
 * @FilePath: /Furnace/src/domain/Curd/server/data/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-02 00:47:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 01:57:57
 * @Description: 
 */
import Mock from "mockjs";
import Response from "./response.json";

export default (address, type) => {
    const url = import.meta.env.VITE_APP_SERVER_PREFIX + address;
    const method = toLower(type);

    Mock.mock(url, method, (props) => {
        console.log(props);
        return Response;
    });
}
