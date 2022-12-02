/*
 * @FilePath: \Furnace\src\middleware\network\notfound.response.js
 * @Author: maggot-code
 * @Date: 2022-12-01 17:08:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 11:56:18
 * @Description: 
 */
import { useWarningTips } from "@/hooks/useMessage";

const CODE = "ERR_BAD_REQUEST";
const STATUS = 404;
const MESSAGE = "抱歉，访问资源不存在";

function define(response) {
    return response;
}

function defineError(error) {
    const matchCode = eq(error?.code, CODE);
    const matchStatus = eq(error?.response?.status, STATUS);

    if (matchCode || matchStatus) {
        useWarningTips(MESSAGE);
        return Promise.resolve({
            code: STATUS,
            message: MESSAGE,
            data: null,
        });
    }

    return Promise.reject(error);
}

export default (server) => server.interceptors.response.use(define, defineError);
