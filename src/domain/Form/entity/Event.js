/*
 * @FilePath: /Furnace/src/domain/Form/entity/Event.js
 * @Author: maggot-code
 * @Date: 2022-11-27 16:48:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 17:09:39
 * @Description: 
 */
import { isUnusable } from "@/shared/is";

function examine(validate) {
    return new Promise((resolve) => {
        validate().then(() => {
            resolve(true);
        }).catch((error) => {
            console.log(error);
            resolve(false);
        });
    });
}
export function EventEntity(element) {
    const { refs, ready } = element;

    async function getDataSource() {
        await nextTick();
        if (isUnusable(unref(ready))) return [{}, false];

        const { validate, data } = unref(refs).formOutput();
        const state = await examine(validate);

        return [state ? data : {}, state];
    }

    async function resetDataSource() {
        await nextTick();
        if (isUnusable(unref(ready))) return [{}, false];

        unref(refs).resetForm();
        return getDataSource();
    }

    return {
        getDataSource,
        resetDataSource
    }
}

export default EventEntity;
