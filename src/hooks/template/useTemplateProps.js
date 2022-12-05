/*
 * @FilePath: \Furnace\src\hooks\template\useTemplateProps.js
 * @Author: maggot-code
 * @Date: 2022-12-04 18:39:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 18:00:40
 * @Description: 
 */
import { useRoute } from "@/hooks/router/useRoute";
import { mergeObject } from "~/shared/merge";

export function useTemplateProps(dialogConfig) {
    const route = useRoute();
    const attrs = useAttrs();
    return computed(() => {
        console.log(unref(dialogConfig));
        return mergeObject(unref(route).meta, unref(attrs), unref(dialogConfig));
    });
}

export default useTemplateProps;
