/*
 * @FilePath: /Furnace/src/extend/mockServer.js
 * @Author: maggot-code
 * @Date: 2022-12-04 02:56:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 03:00:53
 * @Description: 
 */
import { useMock } from "~/mock/useMock";

export function extendMock(Vue) {
    useMock();
}

export default extendMock;
