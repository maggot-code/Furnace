/*
 * @FilePath: /Furnace/src/internal/mode/entity/Template.js
 * @Author: maggot-code
 * @Date: 2022-12-04 16:24:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 22:00:53
 * @Description: 
 */
import { UNDEFINED_NAME, UNDEFINED_VIEW } from "~/shared/constant";
import { buildTemplateViews } from "~/shared/views";
import { transString } from "~/shared/trans";

const template = buildTemplateViews();

function choiceTemplate(paths, mode) {
    const regmode = new RegExp(transString(mode).trim().replace(/([,.+?:()*\[\]^$|{}\\-])/g, "\\$1"), "i");
    return paths.find((path) => path.search(regmode) !== -1);
}

export function TemplateEntity(props) {
    if (eq(props.template, UNDEFINED_NAME)) return UNDEFINED_VIEW;

    const { group, paths } = template;
    const path = choiceTemplate(paths, props.template);

    return get(group[path], `default`, UNDEFINED_VIEW);
}

export default TemplateEntity;
