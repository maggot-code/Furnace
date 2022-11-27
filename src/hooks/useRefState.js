/*
 * @FilePath: /Furnace/src/hooks/useRefState.js
 * @Author: maggot-code
 * @Date: 2022-11-27 02:46:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 14:40:46
 * @Description: 
 */
import { mergePlainObject, toArray } from "@/shared/trans";

const NormComplexProps = {
    trans: toArray
}
export function useComplexState(source, props) {
    const { trans } = mergePlainObject(NormComplexProps, props);
    const wrap = flow([trans, toArray])

    const size = computed(() => wrap(unref(source)).length);
    const empty = computed(() => unref(size) <= 0);
    const usable = computed(() => !unref(empty));

    return {
        size,
        empty,
        usable,
        unusable: empty
    };
}
