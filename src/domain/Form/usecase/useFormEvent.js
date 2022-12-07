/*
 * @FilePath: \Furnace\src\domain\Form\usecase\useFormEvent.js
 * @Author: maggot-code
 * @Date: 2022-12-04 22:11:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 11:26:40
 * @Description: 
 */
import { createEventHook } from "@vueuse/core";
import { useWarningTips } from "@/hooks/useMessage";

function transFormData(source) {
    return source.map((value) => {
        if (isPlainObject(value)) return get(value, "url", "");

        return value;
    });
}

function formatFormData(data) {
    return Object.keys(data).reduce((store, key) => {
        const value = data[key];
        store[key] = Array.isArray(value) ? transFormData(value).join("|") : value;
        return store;
    }, {});
}

export function useFormEvent(form) {
    const submitEvent = createEventHook();
    const resetEvent = createEventHook();

    // 检查必填
    async function formSubmit() {
        const [data, state] = await form.getFormData(true);
        submitEvent.trigger({
            data: formatFormData(data),
            state
        });
    }

    // 不检查必填
    async function formSave() {
        const [data, state] = await form.getFormData(false);
        submitEvent.trigger({
            data: formatFormData(data),
            state
        });
    }

    async function formReset() {
        const [data, state] = await form.resetFormData();
        resetEvent.trigger({
            data: formatFormData(data),
            state
        });
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
