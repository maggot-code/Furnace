/*
 * @FilePath: \Furnace\src\hooks\useState.js
 * @Author: maggot-code
 * @Date: 2022-11-21 15:35:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-21 15:41:46
 * @Description: 
 */
import { toBoolean } from "@/shared/trans";

export function defineState(rawState) {
    const dataSource = ref(toBoolean(rawState));
    const state = computed(() => unref(dataSource));
    const usable = computed(() => !!unref(state));
    const unusable = computed(() => !unref(usable));

    function setup(value) {
        dataSource.value = toBoolean(value);
    }
    function toSwitch() {
        setup(!unref(dataSource));
    }
}
