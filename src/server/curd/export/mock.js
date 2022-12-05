/*
 * @FilePath: /Furnace/src/server/curd/export/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-06 01:46:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 01:46:55
 * @Description: 
 */
import { defineMock, defineResponse } from "~/mock";

const mock = defineMock({
    url: "/curd/export",
    method: "GET"
});

export default mock((props) => {
    console.log(props);
    return defineResponse();
});
