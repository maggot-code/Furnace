/*
 * @FilePath: \Furnace\src\server\curd\data\mock.js
 * @Author: maggot-code
 * @Date: 2022-12-05 09:39:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 09:39:41
 * @Description: 
 */
import Response from "./response.json";
import { defineMock, defineResponse } from "~/mock";

const mock = defineMock({
    url: "/curd/source",
    method: "POST"
});

export default mock((props) => {
    console.log(props);
    return defineResponse(Response);
});
