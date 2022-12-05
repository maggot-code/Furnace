/*
 * @FilePath: /Furnace/src/hooks/template/usecase/useTemplateProps.js
 * @Author: maggot-code
 * @Date: 2022-12-04 18:39:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 18:41:39
 * @Description: 
 */
import { useRoute } from "@/hooks/router/useRoute";
import { mergeObject } from "~/shared/merge";

export function useTemplateProps() {
    const route = useRoute();
    const attrs = useAttrs();
    return computed(() => mergeObject(unref(route).meta, unref(attrs)));
}

export default useTemplateProps;
