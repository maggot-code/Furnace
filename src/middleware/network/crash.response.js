/*
 * @FilePath: \Furnace\src\middleware\network\crash.response.js
 * @Author: maggot-code
 * @Date: 2022-12-06 09:24:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 09:24:35
 * @Description: 
 */
import { useErrorTips } from "@/hooks/useMessage";

const CODE = "ERR_BAD_RESPONSE";
const STATUS = 500;
const MESSAGE = "抱歉，服务器出现了点问题..";

function define(response) {
    return response;
}

function defineError(error) {
    const matchCode = eq(error?.code, CODE);
    const matchStatus = eq(error?.response?.status, STATUS);

    if (matchCode || matchStatus) {
        useErrorTips(MESSAGE);
        return Promise.resolve({
            code: STATUS,
            message: MESSAGE,
            data: null,
        });
    }

    return Promise.reject(error);
}

export default (server) => server.interceptors.response.use(define, defineError);
