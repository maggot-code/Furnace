<!--
 * @FilePath: \Furnace\src\pages\User\signin.vue
 * @Author: maggot-code
 * @Date: 2022-12-04 03:01:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-12 14:40:46
 * @Description: 
-->
<script setup>
import { UserLoginServer, UserLoginObtain } from "@/server/user/login";
import { useUserStore } from "@/store/useUserStore";
import { useLogin } from "@/biz/user/usecase/useLogin";
import { useRedirect } from "@/hooks/router/useRedirect";
import { useInfo } from "@/hooks/system/useInfo";
import { useMessageCloseAll, useMessage } from "@/hooks/useMessage";

const { info, version } = useInfo();

const redo = useRedirect();
const userStore = useUserStore();
const login = useLogin();
const { loginRefs, loginForm, loginRules } = login;
const { loading } = UserLoginServer.server;
const fontClass = computed(() => {
    return import.meta.env.DEV
        ? ["furnace-font"]
        : [];
});
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
        <div class="furnace-signin-content">
            <div class="furnace-signin-content-top">
                <div class="furnace-signin-content-top-main">
                    <el-image
                        class="furnace-signin-content-top-main-logo"
                        fit="scale-down"
                        :alt="info.title"
                        :src="info.logo"
                    >
                        <template #error>
                            <i class="el-icon-picture-outline"></i>
                        </template>
                    </el-image>
                    <h1
                        class="furnace-signin-content-top-main-title"
                        :class="fontClass"
                    >{{ info.title }}</h1>
                </div>
                <p
                    class="furnace-signin-content-top-describe"
                    :class="fontClass"
                >{{ info.desc }}</p>
            </div>
            <div class="furnace-signin-content-main">
                <el-form
                    class="furnace-signin-content-main-form"
                    ref="loginRefs"
                    label-width="auto"
                    show-message
                    :hide-required-asterisk="true"
                    :model="loginForm"
                    :rules="loginRules"
                >
                    <el-row :gutter="20">
                        <el-col :span="24">
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
                        </el-col>
                        <el-col :span="24">
                            <el-form-item prop="userpassword">
                                <el-input
                                    v-model="loginForm.userpassword"
                                    @keyup.enter.native="login.onSubmit"
                                    :readonly="loading"
                                    prefix-icon="el-icon-lock"
                                    placeholder="密码：admin@1234"
                                    type="password"
                                    clearable
                                    show-password
                                ></el-input>
                            </el-form-item>
                        </el-col>

                        <!-- <el-col
                            class="form-col"
                            :span="24"
                        >
                            v-model="loginForm.remember"
                            <el-checkbox :disabled="loading">记住密码</el-checkbox>
                        </el-col>
                        <el-col
                            class="form-col"
                            :span="24"
                        >
                            <span>code</span>
                        </el-col> -->

                        <el-col
                            :span="24"
                            class="form-col"
                        >
                            <el-button
                                class="form-col-control"
                                type="primary"
                                :loading="loading"
                                @click="login.onSubmit"
                            >登录</el-button>
                        </el-col>
                        <el-col
                            :span="24"
                            class="form-col"
                        >
                            <el-button
                                class="form-col-control"
                                type="info"
                                :disabled="loading"
                                @click="login.onReset"
                            >重置</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <div class="furnace-signin-content-footer">
                <div class="furnace-signin-content-footer-item furnace-signin-content-footer-help">
                    <el-link
                        type="info"
                        :underline="false"
                    >
                        版权
                    </el-link>
                    <el-divider direction="vertical"></el-divider>
                    <el-link
                        type="info"
                        :underline="false"
                    >
                        介绍
                    </el-link>
                    <el-divider direction="vertical"></el-divider>
                    <el-link
                        type="info"
                        :underline="false"
                    >
                        帮助
                        <i class="el-icon-question el-icon--right"></i>
                    </el-link>
                </div>
                <el-row>
                    <el-row :span="24">
                        <el-link
                            class="furnace-signin-content-footer-item"
                            type="info"
                            icon="el-icon-connection"
                        >
                            {{ info.author }}
                        </el-link>
                    </el-row>
                    <el-row :span="24">
                        <el-link
                            class="furnace-signin-content-footer-item"
                            type="info"
                            icon="el-icon-link"
                            target="_blank"
                            :href="info.store.uri"
                        >
                            {{ info.store.name }}
                        </el-link>
                    </el-row>
                    <el-row :span="24">
                        <el-link
                            class="furnace-signin-content-footer-item"
                            type="info"
                            icon="el-icon-position"
                        >
                            {{ version }}
                        </el-link>
                    </el-row>
                </el-row>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.furnace-font {
    font-family: "Smiley Sans";
}

.furnace-signin {
    display: grid;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background: #f0f2f5 url("@/assets/images/signin-bg.svg") no-repeat 50%;
    background-size: 100%;

    &-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 32px 0;

        &-top,
        &-main,
        &-footer {
            min-width: 240px;
            width: 320px;
            margin-bottom: 12px;
        }

        &-top {
            overflow: hidden;

            &-main {
                display: flex;
                justify-content: center;
                margin-bottom: 12px;

                &-logo,
                &-title {
                    height: 52px;
                    line-height: 52px;
                }

                &-logo {
                    width: 52px;
                }

                &-title {
                    font-size: 32px;
                    padding-left: 12px;
                    color: #666;
                    letter-spacing: 2px;
                    text-shadow: 0 0 2px #333;
                }
            }

            &-describe {
                text-align: center;
                font-size: 16px;
                color: #999;
                height: 24px;
                line-height: 24px;
            }
        }

        &-main {
            & .form-col {
                margin-bottom: 12px;

                &-control {
                    width: 100%;
                }
            }
        }

        &-footer {
            &-help {
                display: flex;
                justify-content: space-around;
            }

            &-item {
                margin-bottom: 12px;
            }
        }
    }
}
</style>
