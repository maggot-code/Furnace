/*
 * @FilePath: \Furnace\src\service\props.entity.js
 * @Author: maggot-code
 * @Date: 2022-11-23 01:18:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-23 02:00:48
 * @Description: 
 */
import { mergePlainObject } from "@/shared/trans";

function trans(response) {
    return response;
}

export const NormSendProps = {
    trans
}

// 定义配置信息
export const defineSendProps = (props) => mergePlainObject(NormSendProps, props);

export default NormSendProps;
