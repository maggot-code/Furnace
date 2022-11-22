/*
 * @FilePath: \Furnace\src\service\defineService.js
 * @Author: maggot-code
 * @Date: 2022-11-21 15:32:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-22 13:59:33
 * @Description: 
 */
import { defineState } from "@/hooks/useState";
import { defineShallowObject } from "@/hooks/useShallowObject";
import { mergePlainObject } from "@/shared/trans";

const normResult = {
    code: -1,
    message: "ok",
    data: null
};
const normConfig = {
    url: "",
    method: "GET",
    responseType: "json",
    params: {},
    data: {},
    headers: {},
};
// 合并外部配置到标准配置中
const mergeConfig = (props) => mergePlainObject(normConfig, props);
// 定义配置信息
const defineConfig = flow([mergeConfig, defineShallowObject]);

function generate(props) {
    const pend = defineState(false);
    const finish = defineState(true);
    const result = defineShallowObject(normResult);
    const config = defineConfig(props);

    const loading = computed(() => unref(pend.state));
    const finished = computed(() => unref(finish.state));

    function stateToStart() {
        pend.toEnable();
        finish.toDisable();
    }
    function stateToEnd() {
        pend.toDisable();
        finish.toEnable();
    }

    return {
        pend,
        finish,
        config,
        result,
        loading,
        finished,
        stateToStart,
        stateToEnd
    }
}

export function defineService(fetch) {
    function send(entity) {
        const controller = new AbortController();
        entity.config.bind("controller", controller);
        entity.config.bind("signal", controller.signal);
        entity.stateToStart();

        return fetch(unref(entity.config.source))
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
            .finally(entity.stateToEnd);
    }
    function abort(entity) {
        const controller = entity.config.take("controller");

        controller && controller.abort();
    }

    return {
        send,
        abort,
        define: generate
    }
}

export default defineService;
