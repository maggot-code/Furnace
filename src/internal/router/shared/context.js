/*
 * @FilePath: /aa/src/internal/router/shared/context.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:09:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-03 17:34:36
 * @Description: 
 */

// 异常路由
export const AccidentRoute = {
    name: "unknow",
    path: "/:pathMatch(.*)*",
    redirect: "/404"
}
