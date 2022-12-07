/*
 * @FilePath: \Furnace\src\domain\Form\entity\Job.js
 * @Author: maggot-code
 * @Date: 2022-12-06 02:16:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 09:48:15
 * @Description: 
 */
import { transObject } from "~/shared/trans";

export function JobEntity() {
    const modules = import.meta.glob("../interface/*.js", { eager: true });

    return Object.keys(transObject(modules)).reduce((store, path) => {
        const [functionName] = path.split("/").pop().split(".");
        store[functionName] = get(modules[path], "default", () => Promise.resolve());
        return store;
    }, {});
}

export default JobEntity;
