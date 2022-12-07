/*
 * @FilePath: \Furnace\src\biz\user\usecase\useLogin.js
 * @Author: maggot-code
 * @Date: 2022-12-04 04:00:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 15:07:33
 * @Description: 
 */
import { LoginFormEntity } from "@/biz/user/entity/LoginForm";
import { useElementRefs } from "@/hooks/useElement";
import { useErrorTips } from "@/hooks/useMessage";
import { transObject, transArray } from "~/shared/trans";
import { createEventHook } from "@vueuse/core";

const NormMessage = "请完整填写信息!";

function validateMessage(rawError) {
    const error = transObject(rawError);
    const errorKeys = Object.keys(error);
    if (errorKeys.length <= 0 || transArray(error[errorKeys[0]]).length <= 0) return NormMessage;

    const [firstKey] = errorKeys;
    const [firstError] = error[firstKey];

    return get(firstError, "message", NormMessage);
}

const useErrorMessage = flow([validateMessage, useErrorTips]);

export function useLogin() {
    const { data, rules } = LoginFormEntity();
    const { refs } = useElementRefs();
    const event = createEventHook();

    function onSubmit() {
        unref(refs).validate((state, error) => {
            if (!state) return useErrorMessage(error);

            event.trigger({
                data: unref(data),
                form: unref(refs)
            });
        });
    }
    function onReset() {
        unref(refs).resetFields();
    }

    onBeforeUnmount(() => {
        event.off();
    });

    return {
        event,
        loginRefs: refs,
        loginForm: data,
        loginRules: rules,
        onAfterSubmit: event.on,
        onSubmit,
        onReset
    }
}

export default useLogin;
