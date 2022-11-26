/*
 * @FilePath: /Furnace/src/hooks/useRefState.js
 * @Author: maggot-code
 * @Date: 2022-11-27 02:46:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 03:41:42
 * @Description: 
 */
import { toPlainObject, toArray } from "@/shared/trans";

const NormComplexProps = {
    trans: toArray
}
export function useComplexState(source, props) {
    const { trans } = toPlainObject(NormComplexProps, props);

    const size = computed(() => trans(unref(source)).length);
    const empty = computed(() => unref(size) <= 0);
    const usable = computed(() => !unref(empty));

    watchEffect(() => {
        console.log(props, trans(unref(source)));
    })

    return {
        size,
        empty,
        usable,
        unusable: empty
    };
}
