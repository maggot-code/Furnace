/*
 * @FilePath: /Furnace/src/internal/router/entity/Component.js
 * @Author: maggot-code
 * @Date: 2022-12-03 23:53:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 17:53:25
 * @Description: 
 */
import { wrapViews, matchView } from "~/shared/views";

export function ComponentEntity(route) {
    const views = wrapViews();
    return matchView(route.component, views);
}

export default ComponentEntity;
