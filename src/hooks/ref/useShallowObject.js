/*
 * @FilePath: /Furnace/src/hooks/ref/useShallowObject.js
 * @Author: maggot-code
 * @Date: 2022-12-04 01:42:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 03:37:29
 * @Description: 
 */
import { transObject } from "~/shared/trans";
import { useComplexState } from "@/hooks/ref/useRefState";

export function useShallowObject(dataSource) {
    const source = shallowRef(transObject(dataSource));
    const state = useComplexState(source, Object.keys);
    function setup(value) {
        source.value = transObject(value);
        return unref(source);
    }
    function bind(path, value) {
        const data = cloneDeep(unref(source));
        set(data, path, value);
        return setup(data);
    }
    function take(path, defaultValue = null) {
        if (unref(state.empty)) return defaultValue;
        return get(unref(source), path, defaultValue);
    }
    function remove(keyword) {
        const data = omit(unref(source), keyword);
        return setup(data);
    }
    function clear() {
        return setup({});
    }
    return {
        source,
        state,
        setup,
        bind,
        take,
        remove,
        clear
    }
}