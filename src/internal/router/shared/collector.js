/*
 * @FilePath: /Furnace/src/internal/router/shared/collector.js
 * @Author: maggot-code
 * @Date: 2022-12-03 17:29:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-04 00:05:44
 * @Description: 
 */
import { UNDEFINED_NAME } from "~/shared/constant";
import { transObject, transArray } from "~/shared/trans";

let Constant;
let Namespace;

const NameKeyword = "Name";
const OmitKeyword = "omit";
const SkipKeyword = "SKIP_STATE";
const PrivateKeyword = ["Address", "Component", NameKeyword];
const reg = /\/([^/]+)\.js$/;
const toPrivate = flow(concat, flattenDeep);
function pickFileName(path) {
    const match = path.match(reg);
    const usable = Array.isArray(match) && match.length > 1;

    return usable ? match.at(1) : UNDEFINED_NAME;
}
function findName(source, path) {
    return get(source[path], NameKeyword, UNDEFINED_NAME);
}
function findPrivate(source) {
    return compact(PrivateKeyword.map((keyword) => get(source, keyword)));
}

// 对路由定义的常量文件进行收集
export function wrapRouterConstant() {
    Constant = Constant ?? import.meta.glob("../constant/*.js", { eager: true });

    return {
        group: Constant,
        paths: Object.keys(transObject(Constant))
    }
}

// 对路由定义的命名空间文件进行收集
export function wrapRouterNamespace() {
    Namespace = Namespace ?? import.meta.glob("../namespace/*.js", { eager: true });

    return {
        group: Namespace,
        paths: Object.keys(transObject(Namespace))
    }
}

export function buildNamespaceMode() {
    const { group, paths } = wrapRouterNamespace();
    return paths.reduce((store, path) => {
        const name = pickFileName(path);
        store[name] = {
            wrap: get(group[path], "wrap"),
            skip: get(group[path], SkipKeyword, false)
        }
        return store;
    }, {});
}

export function buildNamespace() {
    const { paths } = wrapRouterNamespace();
    return paths.reduce((store, path) => {
        const name = pickFileName(path);
        // 别名 => xxxNamespace
        const alias = capitalize(name);
        store[alias] = name;
        return store;
    }, {});
}

// 打包静态路由配置
export function buildFreezeRoutes() {
    const { group, paths } = wrapRouterConstant();
    return compact(paths.map((path) => get(group[path], `default`, false)));
}

// 打包路由常量名称
export function buildConstantName() {
    const { group, paths } = wrapRouterConstant();
    return paths.reduce((store, path) => {
        // 别名 => xxxName
        const alias = capitalize(pickFileName(path)) + NameKeyword;
        store[alias] = findName(group, path);
        return store;
    }, {});
}

// 打包路由常量需要忽略掉的名称
export function buildConstantOmit() {
    const { group, paths } = wrapRouterConstant();
    // 过滤掉路由组中没有打上忽略Tag的路由
    return compact(paths.map((path) => {
        // 没有打忽略Tag则该路由不能被忽略
        const state = get(group[path], `default.${OmitKeyword}`, false);
        // 如果需要被忽略则返回路由名称，否则返回一个假值供compact过滤)
        // 由于上面在检查的时候没有找到或者被打了 false 所以直接 return state 就是假值了
        return state ? findName(group, path) : state;
    }));
}

// 打包路由常量私有名称
// 由于部分路由是服务端提供，而路由中的关键字由人为填写，所以需要对路由中的关键字进行过滤
// 主要提供给路由挂载的时候对路由进行校验使用
// extend 为扩展的私有名称数组，用于在外部扩展更多私有名称（这里只会包装常量中定义的）
export function buildPrivateKeyword(extend) {
    const { group, paths } = wrapRouterConstant();
    return toPrivate([
        paths.map((path) => findPrivate(group[path])),
        transArray(extend)
    ]);
}

export default {
    constant: wrapRouterConstant(),
    namespace: wrapRouterNamespace()
};
