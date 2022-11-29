/*
 * @FilePath: \Furnace\src\middleware\router\nprogress.after.js
 * @Author: maggot-code
 * @Date: 2022-11-30 01:47:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 01:56:43
 * @Description: 
 */
import { useProgress } from "@/hooks/useProgress";

const progress = useProgress();

export function define() {
    progress.done()
}

export default (router) => router.afterEach(define);
