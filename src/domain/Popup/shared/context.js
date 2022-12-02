/*
 * @FilePath: \Furnace\src\domain\Popup\shared\context.js
 * @Author: maggot-code
 * @Date: 2022-12-02 14:17:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 16:24:05
 * @Description: 
 */
export const UnknowTemplate = defineAsyncComponent(() => import("@/components/EmptyView.vue"));

export const POPUP_SYMBOL = Symbol('Popup');
export const Counter = { level: 1 };
export const NormPopupWidth = "80%";
export const NormPopupHeight = "60vh";
export const NormDialogTitle = "应用弹框";
export const ConstantDialogProps = {
    customClass: "furnace-popup",
    fullscreen: false,
    modal: true,
    modalAppendToBody: true,
    appendToBody: true,
    lockScroll: true,
    closeOnClickModal: false,
    closeOnPressEscape: true,
    showClose: true,
    center: false
}
