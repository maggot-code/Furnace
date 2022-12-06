/*
 * @FilePath: \Furnace\src\server\user\login\mock.js
 * @Author: maggot-code
 * @Date: 2022-12-04 02:17:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 16:23:29
 * @Description: 
 */
import { uuid } from "~/shared/uuid";
import { defineMock, defineResponse } from "~/mock";
import { Address, Method } from "./config";

const mock = defineMock({
    url: Address,
    method: Method
});

export default mock((props) => {
    console.log(props);
    return defineResponse({
        data: {
            truename: "Maggot",
            token: uuid(),
            // avatar: "https://i0.hdslb.com/bfs/baselabs/5c2d6de6e6c0b24d3f7e822b744163a1d6fa57e7.png",
            avatar: "http://cdn.maggot.cn/nyan.gif",
            roles: [],
            activeRole: null
        }
    });
});
