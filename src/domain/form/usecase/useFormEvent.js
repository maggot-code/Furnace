/*
 * @FilePath: /Furnace/src/domain/form/usecase/useFormEvent.js
 * @Author: maggot-code
 * @Date: 2022-12-04 22:11:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 22:22:46
 * @Description: 
 */
import { createEventHook } from "@vueuse/core";
// import { useErrorTips } from "@/hooks/useMessage";

export function useFormEvent(form) {
    const submitEvent = createEventHook();
    const resetEvent = createEventHook();

    async function formSubmit() {
        const [data, state] = await form.getFormData();
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
        formReset,
        onSubmit: submitEvent.on,
        onReset: resetEvent.on
    }
}

export default useFormEvent;
