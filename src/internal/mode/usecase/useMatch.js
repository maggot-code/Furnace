/*
 * @FilePath: \Furnace\src\internal\mode\usecase\useMatch.js
 * @Author: maggot-code
 * @Date: 2022-12-04 16:30:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 12:32:13
 * @Description: 
 */
import { UNDEFINED_NAME } from "~/shared/constant";

function choiceMode(paths, mode) {
    const regmode = new RegExp(mode.trim().replace(/([,.+?:()*\[\]^$|{}\\-])/g, "\\$1"), "i");
    return paths.find((path) => path.search(regmode) !== -1);
}

export function useMatch({ group, paths }) {
    function match(props) {
        const mode = get(props, "mode", UNDEFINED_NAME);
        const path = choiceMode(paths, mode);
        return get(group[path], `default`, group[path]);
    }
    return match;
}

export default useMatch;
