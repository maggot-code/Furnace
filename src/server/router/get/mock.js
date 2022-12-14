/*
 * @FilePath: /Furnace/src/server/router/get/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-04 05:25:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-15 13:26:57
 * @Description: 
 */
// import Response from "./response.json";
import Response from "./response.module.json";
import { defineMock, defineResponse } from "~/mock";
import { Address, Method } from "./config";

const mock = defineMock({
    url: Address,
    method: Method
});

export default mock((props) => {
    console.log(props);
    return defineResponse(Response);
});
