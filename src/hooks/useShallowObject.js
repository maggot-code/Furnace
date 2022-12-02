/*
 * @FilePath: \Furnace\src\hooks\useShallowObject.js
 * @Author: maggot-code
 * @Date: 2022-11-22 12:50:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 16:21:57
 * @Description: 
 */
import { toPlainObject } from "@/shared/trans";
import { useComplexState } from "@/hooks/useRefState";

export function defineShallowObject(rawSource) {
    const source = shallowRef(toPlainObject(rawSource));
    const { size, empty, usable, unusable } = useComplexState(source, { trans: Object.keys });

    function setup(value) {
        source.value = toPlainObject(value);

        return unref(source);
    }
    function bind(path, value) {
        const data = cloneDeep(unref(source));
        set(data, path, value);

        return setup(data);
    }
    function take(path, defaultValue = null) {
        if (unref(empty)) return defaultValue;

        return get(unref(source), path, defaultValue);
    }
    function remove(keyword) {
        const data = omit(unref(source), keyword);
        console.log(data);
        return setup({});
    }
    function clear() {
        return setup({});
    }

    return {
        source,
        size,
        empty,
        usable,
        unusable,
        setup,
        bind,
        take,
        remove,
        clear
    }
}

export default defineShallowObject;
