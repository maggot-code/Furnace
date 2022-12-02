/*
 * @FilePath: \Furnace\src\extend\mockData.js
 * @Author: maggot-code
 * @Date: 2022-12-02 11:19:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-02 13:31:29
 * @Description: 
 */
import Mock from "mockjs";

const KEY_WORD = "mock";

export function extendMockData() {
    if (!eq(import.meta.env.MODE, KEY_WORD)) return;

    Mock.setup({
        timeout: "600-800",
    });

    const modules = import.meta.glob("../**/mock.js", { eager: true });
    Object.keys(modules).forEach((path) => {
        if (!isFunction(modules[path].default)) return;
        modules[path].default();
    });
}

export default extendMockData;
