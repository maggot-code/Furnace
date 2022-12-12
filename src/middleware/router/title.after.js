/*
 * @FilePath: \Furnace\src\middleware\router\title.after.js
 * @Author: maggot-code
 * @Date: 2022-12-12 16:21:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 16:22:32
 * @Description: 
 */
import { useTitle } from "@vueuse/core";

function define(to) {
    useTitle(`${import.meta.env.VITE_APP_TITLE} - ${to.meta.title}`);
}

export default (router) => router.afterEach(define);
