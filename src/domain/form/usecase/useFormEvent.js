/*
 * @FilePath: /Furnace/src/domain/form/usecase/useFormEvent.js
 * @Author: maggot-code
 * @Date: 2022-12-04 22:11:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 02:51:57
 * @Description: 
 */
import { createEventHook } from "@vueuse/core";
import { useWarningTips } from "@/hooks/useMessage";

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

    function formError(abnormal) {
        const tips = get(abnormal, "error.txt", "抱歉,表单提交失败,请稍后再试!");
        useWarningTips(tips);
    }

    onBeforeUnmount(() => {
        submitEvent.off();
        resetEvent.off();
    });
    return {
        formSubmit,
        formSave,
        formReset,
        formError,
        onSubmit: submitEvent.on,
        onReset: resetEvent.on
    }
}

export default useFormEvent;
