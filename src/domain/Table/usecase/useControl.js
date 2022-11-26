/*
 * @FilePath: /Furnace/src/domain/Table/usecase/useControl.js
 * @Author: maggot-code
 * @Date: 2022-11-27 02:30:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 03:37:50
 * @Description: 
 */
import { toBoolean, toPlainObject } from "@/shared/trans";

function toState(target) {
    const isRow = toBoolean(target.useRow);
    const isAll = toBoolean(target.useAll);
    return { isRow, isAll, target };
}

function toPickControl(factor, { keys, source }) {
    return computed(() => unref(keys).reduce((cache, key) => {
        const state = toState(unref(source)[key]);
        if (factor(state)) cache[key] = state.target;
        return cache;
    }, {}));
}

function toFilterRow({ isRow }) {
    return isRow;
}
function toFilterAll({ isAll }) {
    return isAll;
}

export function useControl(schema) {
    const { controller } = schema;
    const controllerKeys = computed(() => {
        return Object.keys(toPlainObject(unref(controller)));
    });
    const pickControlProps = {
        keys: controllerKeys,
        source: controller
    };
    const rowController = toPickControl(toFilterRow, pickControlProps);
    const allController = toPickControl(toFilterAll, pickControlProps);

    return {
        controllerKeys,
        rowController,
        allController,
    }
}

export default useControl;
