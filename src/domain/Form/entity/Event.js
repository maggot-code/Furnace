/*
 * @FilePath: \Furnace\src\domain\Form\entity\Event.js
 * @Author: maggot-code
 * @Date: 2022-12-04 21:25:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 09:57:50
 * @Description: 
 */
import { transBoolean } from "~/shared/trans";

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
    async function getData(ischeck) {
        await nextTick();
        if (!unref(element.ready)) return [{}, false];

        const { validate, data } = unref(element.refs).formOutput();
        if (transBoolean(ischeck, false)) {
            const state = await examine(validate);
            return [state ? data : {}, state];
        } else {
            return [data, true];
        }
    }

    async function resetData() {
        await nextTick();
        if (!unref(element.ready)) return [{}, false];

        unref(element.refs).resetForm();
        return getData();
    }

    return {
        getData,
        resetData
    }
}

export default EventEntity;
