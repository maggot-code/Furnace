/*
 * @FilePath: /Furnace/src/extend/scroll.js
 * @Author: maggot-code
 * @Date: 2022-12-08 02:07:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-08 02:08:34
 * @Description: 
 */
import vuescroll from 'vuescroll';

const config = {
    ops: {
        scrollPanel: {
            scrollingX: false,
            verticalNativeBarPos: 'right'
        },
        bar: {
            /** 当不做任何操作时滚动条自动消失的时间 */
            showDelay: 500,
            /** 是否只在滚动的时候现实滚动条 */
            onlyShowBarOnScroll: true,
            /** 是否保持显示 */
            keepShow: false,
            background: 'rgb(144,147,153)',
            opacity: 0.3,
            hoverStyle: false
        },
    },
    name: 'furnaceScroll'
}

export function extendScroll(Vue) {
    Vue.use(vuescroll, config);
}

export default extendScroll;
