/*
 * @FilePath: /Furnace/src/internal/router/entity/ComponentAsync.js
 * @Author: maggot-code
 * @Date: 2022-12-04 16:26:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 22:41:45
 * @Description: 
 */
import { defineMode } from "~/mode/usecase/defineMode";
import { matchView } from "~/shared/views";

export function ComponentAsyncEntity(route) {
    const mode = defineMode();
    const modeEntity = mode.match(route);

    return isFunction(modeEntity)
        ? modeEntity(route)
        : matchView(route.component)
}

export default ComponentAsyncEntity;
