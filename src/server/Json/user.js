/*
 * @FilePath: \Furnace\src\server\Json\user.js
 * @Author: maggot-code
 * @Date: 2022-11-23 17:23:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 17:24:05
 * @Description: 
 */
import { server } from "./define";

// get user list
export const userListServer = server.define({ url: "/users" });
