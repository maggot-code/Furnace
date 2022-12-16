<!--
 * @FilePath: /Furnace/src/components/UserView.vue
 * @Author: maggot-code
 * @Date: 2022-12-06 16:06:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-16 17:08:40
 * @Description: 
-->
<script setup>
import { storeToRefs } from "pinia";
import { isEmptyString } from "~/shared/is";
import { transFunction } from "~/shared/trans";
import { useUserStore } from "@/store/useUserStore";
import { useRedirect } from "@/hooks/router/useRedirect";
import { useModule } from "@/hooks/router/useModule";

const redo = useRedirect();
const { modules, redo: switchModule } = useModule();
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
const userName = computed(() => {
    if (isEmptyString(unref(userInfo).name)) return "管";

    return unref(userInfo).name[0];
});
const commandKind = {
    info: () => unref(userInfo),
    logoff: () => {
        userStore.clearToken();
        redo();
    }
};
function errorHandler(error) {
    console.log(error);
    return true;
}
function handlerCommand(command) {
    const handler = commandKind[command];
    if (isFunction(handler)) {
        handler();
    } else {
        switchModule(command);
    }
}
</script>

<template>
    <div class="furnace-user">
        <el-dropdown
            size="small"
            @command="handlerCommand"
        >
            <el-avatar
                class="furnace-user-avatar"
                :src="userStore.avatar"
                :size="42"
                shape="square"
                @error="errorHandler"
            >{{ userName }}</el-avatar>
            <el-dropdown-menu slot="dropdown">
                <template v-for="(route) in modules">
                    <el-dropdown-item
                        :command="route"
                        :key="route.name"
                    >{{ route.meta.title }}</el-dropdown-item>
                </template>
                <el-dropdown-item
                    command="info"
                    divided
                >个人信息</el-dropdown-item>
                <el-dropdown-item command="logoff">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<style scoped lang='scss'>
.furnace-user {
    width: 100%;
    height: 100%;

    &-avatar {
        cursor: pointer;
    }
}
</style>
