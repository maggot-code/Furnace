/*
 * @FilePath: /Furnace/src/hooks/useScroll.js
 * @Author: maggot-code
 * @Date: 2022-12-08 02:16:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-08 02:19:53
 * @Description: 
 */
import { useElementRefs } from "@/hooks/useElement";

export function useScroll() {
    const { refs } = useElementRefs();

    return {
        refs
    }
}

export default useScroll;
