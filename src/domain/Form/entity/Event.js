/*
 * @FilePath: /Furnace/src/domain/form/entity/Event.js
 * @Author: maggot-code
 * @Date: 2022-12-04 21:25:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 22:22:40
 * @Description: 
 */
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
    async function getData() {
        await nextTick();
        if (!unref(element.ready)) return [{}, false];

        const { validate, data } = unref(element.refs).formOutput();
        const state = await examine(validate);

        return [state ? data : {}, state];
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
