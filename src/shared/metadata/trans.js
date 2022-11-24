/*
 * @FilePath: \Furnace\src\shared\metadata\trans.js
 * @Author: maggot-code
 * @Date: 2022-11-24 13:00:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-24 15:26:50
 * @Description: 
 */
import { toArray } from "@/shared/trans";

const normAdapter = (item) => (item);

// 数组结构转树结构
export function arrayToTree(parent, dataSource, props = {}) {
    const check = get(props, "check", eq);
    const adapter = get(props, "adapter", normAdapter);

    return toArray(dataSource).reduce((store, raw, index, source) => {
        if (check(parent, raw)) store.push(adapter({
            ...raw,
            index,
            children: arrayToTree(raw, source, props)
        }));

        return store;
    }, []);
}
