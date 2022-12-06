/*
 * @FilePath: /Furnace/src/server/config/form/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-04 21:37:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 21:37:13
 * @Description: 
 */
import Response from "./response.json";
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
