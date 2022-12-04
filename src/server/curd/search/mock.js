/*
 * @FilePath: /Furnace/src/server/curd/search/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-05 00:23:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 00:28:40
 * @Description: 
 */
import Response from "./response.json";
import { defineMock, defineResponse } from "~/mock";

const mock = defineMock({
    url: "/curd/search",
    method: "GET"
});

export default mock((props) => {
    console.log(props);
    return defineResponse(Response);
});
