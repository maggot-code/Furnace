/*
 * @FilePath: /Furnace/src/internal/mode/usecase/useMatch.js
 * @Author: maggot-code
 * @Date: 2022-12-04 16:30:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 23:07:36
 * @Description: 
 */
import { UNDEFINED_NAME, UNDEFINED_VIEW } from "~/shared/constant";
import { transString } from "~/shared/trans";

function choiceMode(paths, mode) {
    const regmode = new RegExp(transString(mode).trim().replace(/([,.+?:()*\[\]^$|{}\\-])/g, "\\$1"), "i");
    return paths.find((path) => path.search(regmode) !== -1);
}

export function useMatch({ group, paths }) {
    function match(props) {
        const mode = get(props, "mode", UNDEFINED_NAME);
        const path = choiceMode(paths, mode);
        return get(group[path], `default`, UNDEFINED_VIEW);
    }
    return match;
}

export default useMatch;
