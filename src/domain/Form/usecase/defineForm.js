/*
 * @FilePath: /Furnace/src/domain/Form/usecase/defineForm.js
 * @Author: maggot-code
 * @Date: 2022-11-27 14:44:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 15:43:05
 * @Description: 
 */
import { isUsable } from "@/shared/is";

import { useElementRefs } from "@/hooks/useElement";
import { SchemaEntity } from "../entity/Schema";

export function defineForm(namespace) {
    const element = useElementRefs();
    const schema = SchemaEntity();

    const wrap = {
        element,
        schema,
        formRefs: element.refs,
        formSchema: schema.formSchema,
        cellSchema: schema.cellSchema
    }
    if (isUsable(namespace)) provide(namespace, wrap);
    return wrap;
}

export default defineForm;
