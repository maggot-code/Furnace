/*
 * @FilePath: /Furnace/src/domain/curd/usecase/useCurdForm.js
 * @Author: maggot-code
 * @Date: 2022-12-06 01:16:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 01:17:15
 * @Description: 
 */
import { CURD_FORM_SYMBOL } from "../shared/context";

export function useCurdForm() {
    const form = inject(CURD_FORM_SYMBOL);
    return form;
}

export default useCurdForm;
