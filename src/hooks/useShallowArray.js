/*
 * @FilePath: /Furnace/src/hooks/useShallowArray.js
 * @Author: maggot-code
 * @Date: 2022-11-22 13:11:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 02:56:22
 * @Description: 
 */
import { toArray } from "@/shared/trans";
import { useComplexState } from "@/hooks/useRefState";

export function defineShallowArray(rawSource) {
    const source = shallowRef(toArray(rawSource));
    const { size, empty, usable, unusable } = useComplexState(source);

    function setup(value) {
        source.value = toArray(value);

        return source;
    }
    function insert() { }
    function remove() { }
    function find() { }
    function clear() {
        return setup([]);
    }

    return {
        source,
        size,
        empty,
        usable,
        unusable,
        setup,
        insert,
        remove,
        find,
        clear
    }
}

export default defineShallowArray;
