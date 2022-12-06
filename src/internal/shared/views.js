/*
 * @FilePath: \Furnace\src\internal\shared\views.js
 * @Author: maggot-code
 * @Date: 2022-12-03 21:31:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 12:28:48
 * @Description: 
 */
import { UNDEFINED_VIEW } from "~/shared/constant";
import { transDefault } from "~/shared/trans";

let Views;
function cutGroup(namespace, views) {
    const group = {};
    const paths = [];
    views.paths.forEach((path) => {
        if (!path.includes(namespace)) return;
        group[path] = views.group[path];
        paths.push(path);
    });
    return { group, paths }
}

export function wrapViews() {
    Views = import.meta.glob("../../{layout,pages,template,biz}/**/*.{vue,jsx,tsx}", { eager: true });

    return {
        group: Views,
        paths: Object.keys(Views)
    }
}

export function buildBizViews() {
    const gather = wrapViews();
    return cutGroup("/biz", gather);
}

export function buildLayoutViews() {
    const gather = wrapViews();
    return cutGroup("/layout", gather);
}

export function buildPagesViews() {
    const gather = wrapViews();
    return cutGroup("/pages", gather);
}

export function buildTemplateViews() {
    const gather = wrapViews();
    return cutGroup("/template", gather);
}

export function matchView(path, provide) {
    const { group, paths } = provide ?? wrapViews();
    const match = paths.find((filePath) => filePath.includes(path));
    const view = get(group[match], "default", group[match]);
    return transDefault(view, UNDEFINED_VIEW);
}

export default wrapViews();
