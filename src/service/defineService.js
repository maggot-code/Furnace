/*
 * @FilePath: \Furnace\src\service\defineService.js
 * @Author: maggot-code
 * @Date: 2022-11-21 15:32:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 17:02:21
 * @Description: 
 */
import { useProgress } from "@/hooks/useProgress";
import { defineState } from "@/hooks/useState";
import { defineShallowObject } from "@/hooks/useShallowObject";
import { defineConfig } from "@/service/config.entity";
import { NormResult } from "@/service/result.entity";
import { toBoolean, mergePlainObject } from "@/shared/trans";

const progress = useProgress();
const serviceProps = {
    transResponse: (response) => response,
};

function generate(props) {
    const config = defineConfig(props);
    // 存疑
    const result = defineShallowObject(NormResult);
    const startup = defineState(false);
    const pend = defineState(false);
    const finish = defineState(true);

    const started = computed(() => unref(startup.state));
    const loading = computed(() => unref(pend.state));
    const finished = computed(() => unref(finish.state));

    function toRecord() {
        if (unref(started)) return;

        startup.toEnable();
    }
    function toStart() {
        progress.start();
        pend.toEnable();
        finish.toDisable();
    }
    function toEnd() {
        toRecord();
        pend.toDisable();
        finish.toEnable();
        progress.done();
    }

    return {
        started,
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
