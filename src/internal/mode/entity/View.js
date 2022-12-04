/*
 * @FilePath: /Furnace/src/internal/mode/entity/View.js
 * @Author: maggot-code
 * @Date: 2022-12-04 18:22:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 18:36:37
 * @Description: 
 */
import { UNDEFINED_NAME, UNDEFINED_VIEW } from "~/shared/constant";
import { buildBizViews } from "~/shared/views";

const bizviews = buildBizViews();

function choiceTemplate(paths, mode) {
    const regmode = new RegExp(mode.trim().replace(/([,.+?:()*\[\]^$|{}\\-])/g, "\\$1"), "i");
    return paths.find((path) => path.search(regmode) !== -1);
}

export function ViewEntity(props) {
    if (eq(props.address, UNDEFINED_NAME)) return UNDEFINED_VIEW;

    const { group, paths } = bizviews;
    const path = choiceTemplate(paths, props.address);

    return get(group[path], `default`, UNDEFINED_VIEW);
}

export default ViewEntity;
