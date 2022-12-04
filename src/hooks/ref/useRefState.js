/*
 * @FilePath: /Furnace/src/hooks/ref/useRefState.js
 * @Author: maggot-code
 * @Date: 2022-11-27 02:46:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 01:53:11
 * @Description: 
 */
import { transArray, transBoolean } from "~/shared/trans";

export function useComplexState(source, trans) {
    const wrap = flow([trans ?? transArray, transArray])

    const size = computed(() => wrap(unref(source))?.length);
    const empty = computed(() => unref(size) <= 0);
    const usable = computed(() => !unref(empty));

    return {
        size,
        empty,
        usable,
        unusable: empty
    };
}

export function useBooleanState(rawState) {
    const source = ref(transBoolean(rawState));
    const state = computed(() => unref(source));
    const usable = computed(() => unref(state) === true);
    const unusable = computed(() => unref(usable) === false);
    function setup(value) {
        source.value = transBoolean(value);
        return unref(source);
    }
    function toSwitch() {
        return setup(!unref(source));
    }
    function toEnable() {
        return setup(true);
    }
    function toDisable() {
        return setup(false);
    }
    return {
        source,
        state,
        usable,
        unusable,
        setup,
        toSwitch,
        toEnable,
        toDisable,
    }
}
