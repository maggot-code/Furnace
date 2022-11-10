/*
 * @FilePath: /Furnace/vite.config.js
 * @Author: maggot-code
 * @Date: 2022-11-10 22:41:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-10 23:14:52
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoimport from "unplugin-auto-import/vite";
import vuecomponents from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuecomponents({
      resolvers: [ElementPlusResolver()],
    }),
    autoimport({
      imports: ["vue"],
    }),
  ],
});
