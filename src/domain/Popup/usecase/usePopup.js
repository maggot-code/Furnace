/*
 * @FilePath: /Furnace/src/domain/popup/usecase/usePopup.js
 * @Author: maggot-code
 * @Date: 2022-12-05 14:13:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 23:32:21
 * @Description: 
 */
import { POPUP_SYMBOLE } from "../shared/context";
import { DialogEntity } from "../entity/Dialog";
import { mergeObject } from "~/shared/merge";

export function usePopup(props) {
    const popup = inject(POPUP_SYMBOLE);
    const record = popup.toRecord();

    function define(extend) {
        const entity = DialogEntity(record, popup, mergeObject(props, extend));
        popup.toPond(entity);
        return entity;
    }
    function release(entity) {
        entity.destroy();
    }

    return {
        define,
        release
    }
}

export default usePopup;
