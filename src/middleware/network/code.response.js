/*
 * @FilePath: \Furnace\src\middleware\network\code.response.js
 * @Author: maggot-code
 * @Date: 2022-12-07 15:15:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 16:39:41
 * @Description: 
 */
import Router from "~/router";
import { RouteName } from "~/router/shared/context";
import { transFunction } from "~/shared/trans";
import { useWarningTips } from "@/hooks/useMessage";
import { useUserStore } from "@/store/useUserStore";
import toString from "lodash-es/toString";

const NormMessage = "抱歉，请稍后重试一次!";
const CodeGroup = {
    "401": (userStore) => userStore.clearToken() && Router.push({ name: RouteName.SigninName }),
    "403": transFunction(),
    "404": transFunction(),
    "500": transFunction(),
};

function define(response) {
    if (!eq(response.status, 200)) return response;

    const userStore = useUserStore();
    const code = get(response, "data.code", -1);
    const message = get(response, "data.msg", NormMessage);

    if (Object.keys(CodeGroup).includes(toString(code))) {
        useWarningTips(message);
        CodeGroup[code](userStore);
        return Promise.reject({
            code: 0,
            message,
            data: null
        });
    }

    return response;
}

export default (server) => server.interceptors.response.use(define);
