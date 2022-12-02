/*
 * @FilePath: \Furnace\src\server\template\save\mock.js
 * @Author: maggot-code
 * @Date: 2022-12-02 17:10:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 17:13:43
 * @Description: 
 */
import Mock from "mockjs";

const ServerAddress = "/form/save";
const ServerMethod = "POST";
const url = import.meta.env.VITE_APP_SERVER_PREFIX + ServerAddress;
const method = toLower(ServerMethod);

export default () => {
    Mock.mock(new RegExp(`^${url}.*`), method, (props) => {
        console.log(props);
        return {
            code: -1,
            message: "ok",
            data: null
        }
    });
}
