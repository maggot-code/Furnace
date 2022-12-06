/*
 * @FilePath: /Furnace/src/hooks/useMessage.js
 * @Author: maggot-code
 * @Date: 2022-11-23 01:30:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 01:28:52
 * @Description: 
 */
import { Message } from "element-ui";
import { mergeObject } from "~/shared/merge";
import { isEmptyString } from "~/shared/is";

export const NormProps = {
    type: "info",
    customClass: "furnace-message",
    offset: 60,
    duration: import.meta.env.DEV ? 3000 : 1200,
    showClose: true,
    center: false,
    dangerouslyUseHTMLString: false
}

export function useMessage(props) {
    const config = mergeObject(NormProps, props);

    if (isEmptyString(config.message)) return;

    Message.closeAll();
    Message(config);
}

export function useSuccessTips(message) {
    useMessage({
        message,
        type: "success"
    });
}

export function useWarningTips(message) {
    useMessage({
        message,
        type: "warning"
    });
}

export function useErrorTips(message) {
    useMessage({
        message,
        type: "error"
    });
}

export default useMessage;
