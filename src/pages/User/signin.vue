<!--
 * @FilePath: /Furnace/src/pages/User/signin.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 03:01:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 05:14:54
 * @Description: 
-->
<script setup>
import { UserLoginServer, UserLoginObtain } from "@/server/user/login";
import { useWatch } from "@/hooks/service/useWatch";
import { useUserStore } from "@/store/useUserStore";
import { useLogin } from "@/biz/user/usecase/useLogin";
import { useRedirect } from "@/hooks/router/useRedirect";

const redo = useRedirect();
const userStore = useUserStore();
const login = useLogin();
const { loginRefs, loginForm, loginRules } = login;
const { loading } = UserLoginServer.server;

login.onAfterSubmit((props) => UserLoginObtain(props.data));

useWatch(UserLoginServer, (response) => {
    userStore.setup(response);
    redo();
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
