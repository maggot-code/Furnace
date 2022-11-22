/*
 * @FilePath: \Furnace\src\service\defineService.js
 * @Author: maggot-code
 * @Date: 2022-11-21 15:32:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 01:28:59
 * @Description: 
 */
import { defineState } from "@/hooks/useState";
import { defineShallowObject } from "@/hooks/useShallowObject";
import { defineConfig } from "@/service/config.entity";
import { defineSendProps } from "@/service/props.entity";
import { NormResult } from "@/service/result.entity";

function generate(props) {
    const pend = defineState(false);
    const finish = defineState(true);
    const result = defineShallowObject(NormResult);
    const config = defineConfig(props);

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

export function defineService(fetch) {
    function send(entity, props) {
        const { trans } = defineSendProps(props);
        const controller = new AbortController();

        entity.config.bind("controller", controller);
        entity.config.bind("signal", controller.signal);
        entity.toStart();

        return fetch(unref(entity.config.source))
            .then((response) => {
                console.log(response);
                return trans(response);
            })
            .catch((error) => {
                console.log(error);
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
