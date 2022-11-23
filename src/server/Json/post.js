/*
 * @FilePath: \Furnace\src\server\Json\post.js
 * @Author: maggot-code
 * @Date: 2022-11-23 17:24:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 17:24:31
 * @Description: 
 */
import { server } from "./define";

// get post list
export const postListServer = server.define({ url: "/posts" });
