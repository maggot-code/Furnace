/*
 * @FilePath: /Furnace/src/server/curd/edit/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-06 00:09:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 00:09:54
 * @Description: 
 */
import Response from "../async/response.json";
import { defineMock, defineResponse } from "~/mock";

const mock = defineMock({
    url: "/curd/edit",
    method: "GET"
});

export default mock((props) => {
    console.log(props);
    return defineResponse(Response);
});
