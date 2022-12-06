/*
 * @FilePath: /Furnace/src/server/curd/delete/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-06 01:46:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 01:46:41
 * @Description: 
 */
import { defineMock, defineResponse } from "~/mock";

const mock = defineMock({
    url: "/curd/delete",
    method: "GET"
});

export default mock((props) => {
    console.log(props);
    return defineResponse();
});
