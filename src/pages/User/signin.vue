<!--
 * @FilePath: \Furnace\src\pages\User\signin.vue
 * @Author: maggot-code
 * @Date: 2022-11-24 12:46:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 17:44:55
 * @Description: 
-->
<script setup>
import { LoginServer, obtainLogin, abortLogin } from "@/server/user/login";
import { GetRouterServer } from "@/server/Router/get";
import { useServerLoad } from "@/hooks/useServerLoad";
import { useWatchServer } from "@/hooks/useWatchServer";
import { useElementRefs } from "@/hooks/useElement";
import { useRedirect } from "@/hooks/useVueRouter";
import { useUserStore } from "@/store/useUserStore";
import { toFormData } from "@/shared/trans";

const redo = useRedirect();
const userStore = useUserStore();
const loading = useServerLoad([GetRouterServer, LoginServer]);
const { refs } = useElementRefs();

const form = reactive({
    username: "admin",
    userpwd: "admin@1234",
    note: "",
    code: ""
});
const rules = {
    username: [
        {
            required: true,
            message: "请输入用户名",
            trigger: "change"
        },
        // {
        //     min: 4,
        //     max: 16,
        //     message: "用户名长度在 4 到 16 个字符",
        //     trigger: "blur"
        // }
    ],
    userpwd: [
        {
            required: true,
            message: "请输入密码",
            trigger: "change"
        },
        // {
        //     min: 6,
        //     max: 16,
        //     message: "密码长度在 6 到 16 个字符",
        //     trigger: "blur"
        // }
    ],
};

function submitForm() {
    unref(refs).validate((state) => state && obtainLogin(toFormData(unref(form))));
}
function resetForm() {
    unref(refs).resetFields();
}

useWatchServer(LoginServer, (response) => {
    userStore.setup(response);
    userStore.setupToken(response);
    redo();
});
onBeforeUnmount(() => abortLogin());
</script>

<template>
    <div class="furnace-signin">
        <el-form
            ref="refs"
            label-width="auto"
            show-message
            status-icon
            :hide-required-asterisk="true"
            :model="form"
            :rules="rules"
        >
            <el-form-item prop="username">
                <el-input
                    v-model="form.username"
                    :readonly="loading"
                    prefix-icon="el-icon-user"
                    placeholder="账户：admin"
                    type="text"
                    clearable
                ></el-input>
            </el-form-item>
            <el-form-item prop="userpwd">
                <el-input
                    v-model="form.userpwd"
                    :readonly="loading"
                    prefix-icon="el-icon-lock"
                    placeholder="密码：furnace"
                    type="password"
                    clearable
                    show-password
                ></el-input>
            </el-form-item>
            <!-- <el-form-item>
                <el-input
                    v-model="form.note"
                    prefix-icon="el-icon-message"
                    placeholder="短信验证码"
                >
                    <el-button slot="append">获取短信验证码</el-button>
                </el-input>
            </el-form-item> -->
            <el-form-item>
                <el-button
                    :loading="loading"
                    @click="submitForm"
                >登录</el-button>
                <el-button
                    :disabled="loading"
                    @click="resetForm"
                >重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped lang='scss'>
.furnace-signin {
    display: grid;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
