/*
 * @FilePath: /Furnace/src/server/curd/table/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-05 00:24:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 00:28:36
 * @Description: 
 */
import Response from "./response.json";
import { defineMock, defineResponse } from "~/mock";

const mock = defineMock({
    url: "/curd/table",
    method: "GET"
});

export default mock((props) => {
    console.log(props);
    return defineResponse(Response);
});
