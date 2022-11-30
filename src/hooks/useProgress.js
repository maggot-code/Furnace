/*
 * @FilePath: \Furnace\src\hooks\useProgress.js
 * @Author: maggot-code
 * @Date: 2022-11-30 01:54:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 23:41:55
 * @Description: 
 */
import NProgress from 'nprogress';

export function useProgress() {
    NProgress.configure({
        easing: 'ease',
        speed: 500,
        minimum: 0.2,
        showSpinner: false
    });

    return NProgress;
}

export default useProgress;
