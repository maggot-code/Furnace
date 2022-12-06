<!--
 * @FilePath: \Furnace\src\layout\BizHeader.vue
 * @Author: maggot-code
 * @Date: 2022-11-23 23:43:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 16:07:58
 * @Description: 
-->
<template>
    <div class="furnace-header">
        <div class="furnace-header-simple">
            <div
                class="furnace-header-icon furnace-header-simple-shrink"
                @click="menuStore.switchCollapse"
            >
                <i :class="iconName"></i>
            </div>
            <div class="furnace-header-icon furnace-header-simple-refresh">
                <el-tooltip
                    effect="dark"
                    content="刷新当前页面"
                    placement="right"
                >
                    <i class="el-icon-refresh"></i>
                </el-tooltip>
            </div>
            <el-breadcrumb
                class="furnace-header-simple-crumb"
                separator-class="el-icon-arrow-right"
            >
                <template v-for="(node) in crumbGroup">
                    <el-breadcrumb-item :key="node.uid">
                        {{ node.title }}
                    </el-breadcrumb-item>
                </template>
            </el-breadcrumb>
        </div>
        <div class="furnace-header-function">
            <div class="furnace-header-icon furnace-header-function-lock">
                <el-tooltip
                    effect="dark"
                    content="锁屏"
                    placement="top"
                >
                    <i class="el-icon-lock"></i>
                </el-tooltip>
            </div>
            <div
                class="furnace-header-icon furnace-header-function-clean"
                @click="toclear"
            >
                <el-tooltip
                    effect="dark"
                    content="清理缓存"
                    placement="top"
                >
                    <i class="el-icon-brush"></i>
                </el-tooltip>
            </div>
            <div
                class="furnace-header-icon furnace-header-function-cache"
                @click="toupdate"
            >
                <el-tooltip
                    effect="dark"
                    content="更新缓存"
                    placement="top"
                >
                    <i class="el-icon-sort"></i>
                </el-tooltip>
            </div>
            <div class="furnace-header-function-user">
                <UserView></UserView>
            </div>
        </div>
    </div>
</template>

<script>
import { useMenu } from "~/menu/usecase/useMenu";
import {
    useClearCache,
    useUpdateCache
} from "@/hooks/system/useCache";

export default {
    name: 'BizHeader',
    mixins: [],
    components: {},
    props: {},
    setup() {
        const toclear = useClearCache();
        const toupdate = useUpdateCache();
        const { menuStore } = useMenu();
        const iconName = computed(() => {
            return menuStore.collapse ? "el-icon-s-unfold" : "el-icon-s-fold";
        });

        return {
            menuStore,
            iconName,
            toclear,
            toupdate
        }
    },
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {
        crumbGroup() {
            const routes = this.$router.getRoutes();
            return this.$route.meta.map.map((uid) => {
                return routes.find((route) => eq(get(route, "meta.uid"), uid)).meta;
            });
        }
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() { },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
.furnace-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-simple,
    &-function {
        display: flex;
        align-items: center;
        flex: 1;
        height: 100%;
    }

    &-simple {
        justify-content: flex-start;
    }

    &-function {
        justify-content: flex-end;
    }
}

.furnace-header-icon {
    padding: 0 6px;
    font-size: 18px;
    transition: all 0.2s;
    cursor: pointer;

    &:nth-of-type(1) {
        padding-left: 0;
    }

    &:nth-last-of-type(1) {
        padding-right: 0;
    }

    &:hover {
        color: #409EFF;
        transform: scale(1.2);
    }
}
</style>
