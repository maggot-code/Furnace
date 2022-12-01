/*
 * @FilePath: \Furnace\vite.config.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-01 18:04:33
 * @Description: 
 */
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import { visualizer } from "rollup-plugin-visualizer";

import vue from '@vitejs/plugin-vue2';
import viteCompression from "vite-plugin-compression";
import autoImport from "unplugin-auto-import/vite";
import vueComponents from "unplugin-vue-components/vite";

import lodashImport from "./plugins/lodash";
import componentImport from "./plugins/component";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    console.log(mode, env.VITE_APP_BASE);

    return {
        base: env.VITE_APP_BASE,
        clearScreen: true,
        server: {
            hmr: true,
            proxy: {
                "/ytxd": {
                    target: "http://192.1.1.5:8080/",
                    changeOrigin: true
                },
            }
        },
        resolve: {
            alias: [
                {
                    find: "@",
                    replacement: '/src',
                }
            ],
            extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"],
            dedupe: ["vue"],
            preserveSymlinks: false,
        },
        plugins: [
            vue(),
            splitVendorChunkPlugin(),
            autoImport({
                imports: [
                    "vue",
                    "vue-router",
                    "pinia",
                    {
                        "lodash-es": lodashImport
                    }
                ],
                dts: true
            }),
            vueComponents({
                version: 2.7,
                dirs: componentImport,
                extensions: ["vue", "jsx", "tsx"],
                transformer: "vue2",
                dts: true,
                deep: true,
            }),
            viteCompression({
                verbose: true,
                disable: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz',
                deleteOriginFile: false,
            }),
            visualizer({
                filename: './node_modules/.cache/visualizer/stats.html',
                open: false,
                gzipSize: true,
                brotliSize: true,
            })
        ],
        json: {
            namedExports: true,
            stringify: false,
        },
        build: {
            minify: false,
            target: "es2015",
            sourcemap: 'hidden',
            chunkSizeWarningLimit: 500,
            assetsInlineLimit: 4096,
            modulePreload: true,
            cssCodeSplit: true,
            ssrManifest: false,
            emptyOutDir: true,
            manifest: false,
            write: true,
            brotliSize: false,
            rollupOptions: {
                output: {
                    chunkFileNames: `assets/js/[name]-[hash].js`,
                    entryFileNames: `assets/js/[name]-[hash].js`,
                    assetFileNames: `assets/[name]-[hash].[ext]`,
                    manualChunks: {
                        'element-ui': ['element-ui'],
                        "maggot-form": ["maggot-form"],
                        "maggot-table": ["maggot-table"],
                    }
                },
            },
        }
    }
});
