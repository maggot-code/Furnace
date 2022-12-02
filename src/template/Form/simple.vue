<!--
 * @FilePath: \Furnace\src\template\Form\simple.vue
 * @Author: maggot-code
 * @Date: 2022-12-02 16:28:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 18:18:27
 * @Description: 
-->
<script setup>
import { ConfigCurdServer, obtainCurdConfig, abortConfigCurd } from "@/server/template/config";
import { FormStructServer, obtainFormStruct, abortFormStruct } from "@/server/template/form";
import { FormSaveServer, obtainFormSave, abortFormSave } from "@/server/template/save";

import { defineForm } from "@/domain/Form";

import { useErrorTips } from "@/hooks/useMessage";
import { useRoute } from "@/hooks/useVueRouter";
import { useServerLoad } from "@/hooks/useServerLoad";
import { useWatchServer } from "@/hooks/useWatchServer";

import { mergePlainObject, toFormData } from "@/shared/trans";

const form = defineForm();
const { formRefs, formSchema, cellSchema } = form;
const serverGroup = [
    ConfigCurdServer,
    FormStructServer,
    FormSaveServer
];
const abortGroup = [
    abortConfigCurd,
    abortFormStruct,
    abortFormSave
];
const loading = useServerLoad(serverGroup);
const route = useRoute();

function enums() { }
function search() { }

function monitorValue(props) {
    // console.log("monitor value", props);
}
async function onSubmit() {
    const formData = await form.event.getDataSource();
    const [source, state] = formData;

    if (!state) return useErrorTips("请检查表单是否已经填写完整");

    const options = mergePlainObject({
        data: toFormData(source)
        // data: source
    }, ConfigCurdServer.result.take("data.save"));
    obtainFormSave(options);
}

useWatchServer(ConfigCurdServer, (response) => {
    obtainFormStruct(response.data[route.params.type]);
});
useWatchServer(FormStructServer, (response) => {
    const { formSchema, cellSchema } = response.data;

    form.schema.formConfig.setup(formSchema);
    form.schema.cellConfig.setup(cellSchema);
});
onBeforeMount(() => {
    obtainCurdConfig(route.params);
});
onBeforeUnmount(() => {
    form.schema.formConfig.clear();
    form.schema.cellConfig.clear();
    abortGroup.forEach((abort) => abort());
});
</script>

<template>
    <div
        class="template-form-simple"
        v-loading="loading"
    >
        <div class="template-form-simple-body">
            <mg-form
                ref="formRefs"
                :schema="{ formSchema, cellSchema }"
                :remote="{ enums, search }"
                @monitor-value="monitorValue"
            ></mg-form>
        </div>
        <div class="template-form-simple-footer">
            <el-button
                size="mini"
                @click="onSubmit"
            >
                提交
            </el-button>

            <el-button
                size="mini"
                @click="form.event.resetDataSource"
            >
                重置
            </el-button>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.template-form-simple {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 6px;
    overflow: hidden;
    box-sizing: border-box;

    &-body {
        width: 100%;
        height: calc(100% - 64px);
        overflow-x: hidden;
        overflow-y: auto;
    }

    &-footer {
        width: 100%;
        height: 32px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 6px;
        box-sizing: border-box;
    }
}
</style>
