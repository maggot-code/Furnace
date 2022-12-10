/*
 * @FilePath: /Furnace/src/server/common/test/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-10 14:38:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-10 14:41:17
 * @Description: 
 */
import Response from "./response.json";
import { defineMock, defineResponse } from "~/mock";

const mock = defineMock({
    url: "/get/city"
});

export default mock((props) => {
    console.log(props);
    return defineResponse(Response);
});
