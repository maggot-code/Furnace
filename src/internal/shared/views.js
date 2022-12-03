/*
 * @FilePath: /Furnace/src/internal/shared/views.js
 * @Author: maggot-code
 * @Date: 2022-12-03 21:31:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 21:59:44
 * @Description: 
 */
import { UNDEFINED_VIEW } from "~/shared/constant";
import { transDefault } from "~/shared/trans";

let Views;

export function wrapViews() {
    Views = Views ?? import.meta.glob("../../{layout,pages,template,biz}/**/*.{vue,jsx,tsx}", { eager: true });

    return {
        group: Views,
        paths: Object.keys(Views)
    }
}

export function matchView(path) {
    const { group, paths } = wrapViews();
    const match = paths.find((filePath) => filePath.includes(path));
    const view = get(group[match], "default", group[match]);
    return transDefault(view, UNDEFINED_VIEW);
}

export default wrapViews();
