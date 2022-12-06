/*
 * @FilePath: \Furnace\src\server\user\login\config.js
 * @Author: maggot-code
 * @Date: 2022-12-04 05:09:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 09:20:16
 * @Description: 
 */
export const Address = "/signin_vue";
export const Method = "POST";
export const RequestMapper = [
    ["userpassword", "userpwd"]
];
export const ResponseMapper = [
    ["truename", "name"],
    ["roletype", "activeRole"]
];
