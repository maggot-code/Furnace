/*
 * @FilePath: \Furnace\src\service\defineService.js
 * @Author: maggot-code
 * @Date: 2022-11-21 15:32:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 03:15:43
 * @Description: 
 */
import { defineState } from "@/hooks/useState";
import { defineShallowObject } from "@/hooks/useShallowObject";
import { defineConfig } from "@/service/config.entity";
import { defineSendProps } from "@/service/props.entity";
import { NormResult } from "@/service/result.entity";

function generate(props) {
    const config = defineConfig(props);
    // 存疑
    const result = defineShallowObject(NormResult);
    const pend = defineState(false);
    const finish = defineState(true);

    const loading = computed(() => unref(pend.state));
    const finished = computed(() => unref(finish.state));

    function toStart() {
        pend.toEnable();
        finish.toDisable();
    }
    function toEnd() {
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
        toStart,
        toEnd
    }
}

export function defineService(toFetch) {
    function send(entity, props) {
        // props 置换不应该出现在这里，应该在定义服务时配置
        const { trans } = defineSendProps(props);
        const controller = new AbortController();
        const toResult = flow(trans, entity.result.setup);

        entity.config.bind("controller", controller);
        entity.config.bind("signal", controller.signal);
        entity.toStart();

        return toFetch(unref(entity.config.source))
            .then((response) => {
                return toResult(response);
            })
            .catch((error) => {
                return error;
            })
            .finally(entity.toEnd);
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
