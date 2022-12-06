/*
 * @FilePath: /Furnace/src/server/config/curd/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-04 22:25:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 00:28:05
 * @Description: 
 */
import Response from "./response.json";
import { defineMock, defineResponse } from "~/mock";
import { ConfigAddress, ConfigMethod } from "./config";

const mock = defineMock({
    url: ConfigAddress,
    method: ConfigMethod
});

export default mock((props) => {
    console.log(props);
    return defineResponse(Response);
});
