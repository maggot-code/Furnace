/*
 * @FilePath: /Furnace/src/domain/Form/entity/Element.js
 * @Author: maggot-code
 * @Date: 2022-11-26 16:40:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 16:46:53
 * @Description: 
 */
export function ElementEntity() {
    const refs = ref(null);
    const ready = computed(() => !isNil(unref(refs)));

    return {
        refs,
        ready
    }
}

export default ElementEntity;
