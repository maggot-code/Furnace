/*
 * @FilePath: /Furnace/src/server/curd/add/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-06 00:08:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 00:09:32
 * @Description: 
 */
import Response from "../async/response.json";
import { defineMock, defineResponse } from "~/mock";

const mock = defineMock({
    url: "/curd/add",
    method: "GET"
});

export default mock((props) => {
    console.log(props);
    return defineResponse(Response);
});
