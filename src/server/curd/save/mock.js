/*
 * @FilePath: /Furnace/src/server/curd/save/mock.js
 * @Author: maggot-code
 * @Date: 2022-12-06 00:41:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 00:43:07
 * @Description: 
 */
import { defineMock, defineResponse } from "~/mock";

const mock = defineMock({
    url: "/curd/save",
    method: "POST"
});

export default mock((props) => {
    console.log(props);
    return defineResponse();
});
