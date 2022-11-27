/*
 * @FilePath: /Furnace/src/domain/Form/usecase/defineForm.js
 * @Author: maggot-code
 * @Date: 2022-11-27 14:44:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 16:49:23
 * @Description: 
 */
import { isUsable } from "@/shared/is";

import { useElementRefs } from "@/hooks/useElement";
import { SchemaEntity } from "../entity/Schema";
import { EventEntity } from "../entity/Event";

export function defineForm(namespace) {
    const element = useElementRefs();
    const schema = SchemaEntity();
    const event = EventEntity(element);

    const wrap = {
        element,
        schema,
        event,
        formRefs: element.refs,
        formSchema: schema.formSchema,
        cellSchema: schema.cellSchema
    }
    if (isUsable(namespace)) provide(namespace, wrap);
    return wrap;
}

export default defineForm;
