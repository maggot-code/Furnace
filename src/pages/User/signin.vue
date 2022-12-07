<!--
 * @FilePath: \Furnace\src\pages\User\signin.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 03:01:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-07 17:21:32
 * @Description: 
-->
<script setup>
import { UserLoginServer, UserLoginObtain } from "@/server/user/login";
import { useUserStore } from "@/store/useUserStore";
import { useLogin } from "@/biz/user/usecase/useLogin";
import { useRedirect } from "@/hooks/router/useRedirect";
import { useMessageCloseAll, useMessage } from "@/hooks/useMessage";

const redo = useRedirect();
const userStore = useUserStore();
const login = useLogin();
const { loginRefs, loginForm, loginRules } = login;
const { loading } = UserLoginServer.server;
function loginNext(response) {
    // useSuccessTips("成功,正在为您载入配置");
    userStore.setup(response) && redo();
}
function loginCutoff(error) {
    console.log(error);
}
login.onAfterSubmit((props) => {
    useMessage({
        duration: 0,
        message: "登录中",
        showClose: false,
        iconClass: "el-icon-loading"
    });
    UserLoginObtain(props.data)
        .then(loginNext)
        .catch(loginCutoff)
        .finally(useMessageCloseAll);
});
</script>

<template>
    <div class="furnace-signin">
        <el-form
            ref="loginRefs"
            label-width="auto"
            show-message
            status-icon
            :hide-required-asterisk="true"
            :model="loginForm"
            :rules="loginRules"
        >
            <el-form-item prop="username">
                <el-input
                    v-model="loginForm.username"
                    @keyup.enter.native="login.onSubmit"
                    :readonly="loading"
                    prefix-icon="el-icon-user"
                    placeholder="账户：admin"
                    type="text"
                    clearable
                ></el-input>
            </el-form-item>
            <el-form-item prop="userpassword">
                <el-input
                    v-model="loginForm.userpassword"
                    @keyup.enter.native="login.onSubmit"
                    :readonly="loading"
                    prefix-icon="el-icon-lock"
                    placeholder="密码：furnace"
                    type="password"
                    clearable
                    show-password
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button
                    :loading="loading"
                    @click="login.onSubmit"
                >登录</el-button>
                <el-button
                    :disabled="loading"
                    @click="login.onReset"
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
