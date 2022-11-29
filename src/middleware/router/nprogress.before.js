/*
 * @FilePath: \Furnace\src\middleware\router\nprogress.before.js
 * @Author: maggot-code
 * @Date: 2022-11-30 01:47:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 01:56:19
 * @Description: 
 */
import { useProgress } from "@/hooks/useProgress";

const progress = useProgress();

export function define(to, form, next) {
    if (!progress.isStarted()) progress.start();

    next();
}

export default (router) => router.beforeEach(define);
