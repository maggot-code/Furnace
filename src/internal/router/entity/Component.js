/*
 * @FilePath: /Furnace/src/internal/router/entity/Component.js
 * @Author: maggot-code
 * @Date: 2022-12-03 23:53:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:21:08
 * @Description: 
 */
import { matchView } from "~/shared/views";

export function ComponentEntity(route) {
    return matchView(route.component);
}

export default ComponentEntity;
