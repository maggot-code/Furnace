/*
 * @FilePath: /Furnace/src/hooks/useDriveKeyword.js
 * @Author: maggot-code
 * @Date: 2022-11-27 21:49:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 21:51:05
 * @Description: 
 */
import { uuid } from "@/shared/uuid";
import { toFunction } from "@/shared/trans";

export function useDriveKeyword() {
    const keyword = ref(uuid());
    function update(handler) {
        keyword.value = uuid();
        toFunction(handler)();
    }

    return {
        keyword,
        update
    }
}

export default useDriveKeyword;
