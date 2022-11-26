/*
 * @FilePath: /Furnace/src/hooks/useSlotServer.js
 * @Author: maggot-code
 * @Date: 2022-11-26 16:15:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-26 16:20:49
 * @Description: 
 */
import { isUsable } from "@/shared/is";

export function setupSlotState(slotRender, finished) {
    return computed(() => isUsable([
        isFunction(slotRender),
        unref(finished)
    ]));
}

export function useSlotServer() {
    return {
        slotState: setupSlotState
    }
}

export default useSlotServer;
