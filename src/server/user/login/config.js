/*
 * @FilePath: /Furnace/src/server/user/login/config.js
 * @Author: maggot-code
 * @Date: 2022-12-04 05:09:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 05:09:09
 * @Description: 
 */
export const Address = "/user/login";
export const Method = "POST";
export const RequestMapper = [
    ["userpassword", "userpwd"]
];
export const ResponseMapper = [
    ["truename", "name"]
];
