/*
 * @FilePath: /Furnace/src/internal/service/index.js
 * @Author: maggot-code
 * @Date: 2022-12-04 00:42:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 01:07:25
 * @Description: 
 */
import { ResponseEntity } from "~/service/entity/Response";
import { NormServiceProps } from "~/service/shread/constant";
import { mergeObject } from "~/shared/merge";
import { transBoolean, transArray } from "~/shared/trans";

export function defineService(tofetch, props) {
    // entity => ResponseEntity
    function send(entity, extend) {
        const controller = new AbortController();
        const config = mergeObject(NormServiceProps, props, extend);
        const trans = flow([config.transResponse, entity.result.setup]);

        entity.config.bind("controller", controller);
        entity.config.bind("signal", controller.signal);
        entity.toStart();

        return tofetch(unref(entity.config.source))
            .then((response) => {
                return trans(response);
            })
            .catch((error) => {
                return error;
            })
            .finally(() => {
                entity.toEnd();
            });
    }
    function sendAll(group, settled) {
        const groupServer = transArray(group, [group]);
        return transBoolean(settled, true)
            ? Promise.allSettled(groupServer.map((entity) => send(entity)))
            : Promise.all(groupServer.map((entity) => send(entity)));
    }
    function abort(entity) {
        const controller = entity.config.take("controller");

        controller && controller.abort();
    }
    function abortAll(group) {
        transArray(group, [group]).forEach((entity) => abort(entity));
    }

    return {
        send,
        sendAll,
        abort,
        abortAll,
        define: ResponseEntity
    }
}

export default defineService;
