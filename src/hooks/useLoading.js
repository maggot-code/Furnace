/*
 * @FilePath: \Furnace\src\hooks\useLoading.js
 * @Author: maggot-code
 * @Date: 2022-11-23 02:05:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 02:32:48
 * @Description: 
 */
import { Loading } from "element-ui";
import { mergePlainObject } from "@/shared/trans";

let loadingEntity = null;

export const NormProps = {
    body: true,
    fullscreen: true,
    lock: true,
    text: "请稍后..",
    spinner: 'el-icon-loading',
    customClass: "furnace-loading",
    background: "rgba(233, 233, 233, 0.7)"
}

export function useLoading(props) {
    const config = mergePlainObject(NormProps, props);

    function end() {
        if (isNil(loadingEntity)) return;

        loadingEntity.close();
        loadingEntity = null;
    }

    function start(text = "请稍后..") {
        end();

        loadingEntity = Loading.service(mergePlainObject(config, { text }));
    }

    return {
        end,
        start
    }
}

export function useLoadClose(loading) {
    loading.close();
}

export default useLoading;
