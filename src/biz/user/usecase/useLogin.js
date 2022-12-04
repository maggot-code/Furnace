/*
 * @FilePath: /Furnace/src/biz/user/usecase/useLogin.js
 * @Author: maggot-code
 * @Date: 2022-12-04 04:00:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 04:21:48
 * @Description: 
 */
import { LoginFormEntity } from "@/biz/user/entity/LoginForm";
import { useElementRefs } from "@/hooks/useElement";
import { useErrorTips } from "@/hooks/useMessage";
import { createEventHook } from "@vueuse/core";

export function useLogin() {
    const { data, rules } = LoginFormEntity();
    const { refs } = useElementRefs();
    const event = createEventHook();

    function onSubmit() {
        unref(refs).validate((state) => {
            if (!state) return useErrorTips("请完整填写信息!");

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
