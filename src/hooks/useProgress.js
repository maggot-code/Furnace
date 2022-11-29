/*
 * @FilePath: \Furnace\src\hooks\useProgress.js
 * @Author: maggot-code
 * @Date: 2022-11-30 01:54:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-30 02:13:59
 * @Description: 
 */
import NProgress from 'nprogress';

export function useProgress() {
    NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

    return {
        isStarted: NProgress.isStarted,
        start: NProgress.start,
        done: NProgress.done,
        pend: () => NProgress.inc(0.1),
    }
}

export default useProgress;
