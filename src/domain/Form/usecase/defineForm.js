/*
 * @FilePath: \Furnace\src\domain\Form\usecase\defineForm.js
 * @Author: maggot-code
 * @Date: 2022-12-04 21:17:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-09 10:06:53
 * @Description: 
 */
import { SchemaEntity } from "../entity/Schema";
import { JobEntity } from "../entity/Job";
import { EventEntity } from "../entity/Event";
import { useElementRefs } from "@/hooks/useElement";
import { isUsable } from "~/shared/is";

function provideForm(namespace, wrap) {
    if (isUsable(namespace)) provide(namespace, wrap);
    return wrap;
}

export function defineForm(namespace) {
    const element = useElementRefs();
    const schema = SchemaEntity();
    const job = JobEntity();
    const event = EventEntity(element);
    function setup(struct) {
        schema.formConfig.setup(get(struct, "formSchema", {
            labelWidth: "120px"
        }));
        schema.cellConfig.setup(get(struct, "cellSchema", []));
    }

    onUnmounted(() => {
        schema.formConfig.setup({});
        schema.cellConfig.setup([]);
    });

    return provideForm(namespace, {
        schema,
        formRefs: element.refs,
        formJob: job,
        formSchema: schema.formSchema,
        cellSchema: schema.cellSchema,
        getFormData: event.getData,
        resetFormData: event.resetData,
        setup
    });
}

export default defineForm;
