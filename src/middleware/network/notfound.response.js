/*
 * @FilePath: \Furnace\src\middleware\network\notFound.response.js
 * @Author: maggot-code
 * @Date: 2022-12-01 17:08:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 17:21:24
 * @Description: 
 */
import { useErrorTips } from "@/hooks/useMessage";

const CODE = "ERR_BAD_REQUEST";
const STATUS = 404;
const MESSAGE = "服务地址不存在";

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
