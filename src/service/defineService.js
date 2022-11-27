/*
 * @FilePath: /Furnace/src/service/defineService.js
 * @Author: maggot-code
 * @Date: 2022-11-21 15:32:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 22:58:07
 * @Description: 
 */
import { defineState } from "@/hooks/useState";
import { defineShallowObject } from "@/hooks/useShallowObject";
import { defineConfig } from "@/service/config.entity";
import { NormResult } from "@/service/result.entity";
import { toBoolean, mergePlainObject } from "@/shared/trans";

const serviceProps = {
    transResponse: (response) => response,
};

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

export function defineService(toFetch, props) {
    function send(entity, sendProps) {
        const controller = new AbortController();
        const handler = mergePlainObject(props, sendProps);
        const { transResponse } = mergePlainObject(serviceProps, handler);
        const toTrans = flow([transResponse, entity.result.setup]);

        entity.config.bind("controller", controller);
        entity.config.bind("signal", controller.signal);
        entity.toStart();

        return toFetch(unref(entity.config.source))
            .then((response) => {
                return toTrans(response);
            })
            .catch((error) => {
                return error;
            })
            .finally(() => entity.toEnd());
    }
    function sendAll(group, settled) {
        if (toBoolean(settled, true)) return Promise.allSettled(group.map((entity) => send(entity)));

        return Promise.all(group.map((entity) => send(entity)));
    }
    function abort(entity) {
        const controller = entity.config.take("controller");

        controller && controller.abort();
    }

    return {
        send,
        sendAll,
        abort,
        define: generate
    }
}

export default defineService;
