/*
 * @FilePath: /Furnace/src/internal/service/entity/Response.js
 * @Author: maggot-code
 * @Date: 2022-12-04 00:48:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 01:11:25
 * @Description: 
 */
import { defineShallowObject } from "@/hooks/useShallowObject";
import { defineState } from "@/hooks/useState";
import { ConfigEntity } from "~/service/entity/Config";
import { NormResult } from "~/service/shread/constant";

export function ResponseEntity(defineResult, props) {
    const config = ConfigEntity(props);
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
        // progress.start();
        pend.toEnable();
        finish.toDisable();
    }
    function toEnd() {
        toRecord();
        pend.toDisable();
        finish.toEnable();
        // progress.done();
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

export default ResponseEntity;
