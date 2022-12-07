/*
 * @FilePath: \Furnace\src\middleware\network\token.response.js
 * @Author: maggot-code
 * @Date: 2022-12-07 11:28:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 11:34:12
 * @Description: 
 */
import { useWarningTips } from "@/hooks/useMessage";

const CODE = "ERR_BAD_REQUEST";
const STATUS = 401;
const MESSAGE = "抱歉，需要重新验证您的身份";

function define(response) {
    return response;
}

function defineError(error) {
    // const matchCode = eq(error?.code, CODE);
    const matchStatus = eq(error?.response?.status, STATUS);

    if (matchStatus) {
        useWarningTips(MESSAGE);
        return Promise.resolve({
            // code: STATUS,
            message: MESSAGE,
            data: null,
        });
    }

    return Promise.reject(error);
}

export default (server) => server.interceptors.response.use(define, defineError);
