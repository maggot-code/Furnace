/*
 * @FilePath: \Furnace\src\shared\metadata\views.js
 * @Author: maggot-code
 * @Date: 2022-12-01 09:48:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 10:07:48
 * @Description: 
 */
import { toPlainObject } from "@/shared/trans";

// 视图组
let ViewsGroup;

export function buildViewsGroupKey() {
    return Object.keys(toPlainObject(ViewsGroup));
}

export function buildViewsGroup() {
    ViewsGroup = ViewsGroup ?? import.meta.glob("../../{pages,biz,template,layout}/**/*.{vue,tsx}");

    return {
        views: ViewsGroup,
        keys: buildViewsGroupKey()
    };
}

export function matchView(path) {
    const { views, keys } = buildViewsGroup();
    const match = keys.find(key => key.includes(path));
    const view = views[match];
    // 存疑，是否应该返回一个固定的异常视图
    return view ?? null;
}

export default toPlainObject(ViewsGroup);
