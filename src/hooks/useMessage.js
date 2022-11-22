/*
 * @FilePath: \Furnace\src\hooks\useMessage.js
 * @Author: maggot-code
 * @Date: 2022-11-23 01:30:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 02:02:06
 * @Description: 
 */
import { Message } from "element-ui";
import { mergePlainObject } from "@/shared/trans";
import { isEmptyString } from "@/shared/is";

export const NormProps = {
    type: "info",
    customClass: "furnace-message",
    offset: 60,
    duration: import.meta.env.DEV ? 6000 : 3000,
    showClose: true,
    center: false,
    dangerouslyUseHTMLString: false
}

export function useMessage(props) {
    const config = mergePlainObject(NormProps, props);

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
