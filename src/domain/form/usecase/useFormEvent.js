/*
 * @FilePath: \Furnace\src\domain\form\usecase\useFormEvent.js
 * @Author: maggot-code
 * @Date: 2022-12-04 22:11:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 12:47:37
 * @Description: 
 */
import { createEventHook } from "@vueuse/core";
// import { useErrorTips } from "@/hooks/useMessage";

export function useFormEvent(form) {
    const submitEvent = createEventHook();
    const resetEvent = createEventHook();

    // 检查必填
    async function formSubmit() {
        const [data, state] = await form.getFormData(true);
        submitEvent.trigger({ data, state });
    }

    // 不检查必填
    async function formSave() {
        const [data, state] = await form.getFormData(false);
        submitEvent.trigger({ data, state });
    }

    async function formReset() {
        const [data, state] = await form.resetFormData();
        resetEvent.trigger({ data, state });
    }

    onBeforeUnmount(() => {
        submitEvent.off();
        resetEvent.off();
    });
    return {
        formSubmit,
        formSave,
        formReset,
        onSubmit: submitEvent.on,
        onReset: resetEvent.on
    }
}

export default useFormEvent;
