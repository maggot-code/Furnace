/*
 * @FilePath: /Furnace/src/domain/Form/usecase/useFormWorker.js
 * @Author: maggot-code
 * @Date: 2022-12-06 02:15:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-10 14:46:14
 * @Description: 
 */
import { service } from "@/service/FormServer";
import { transArray } from "~/shared/trans";
import { mergeObject } from "~/shared/merge";

export function useFormWorker(form) {
    // 选项获取
    async function enums(props) {
        const url = get(props, "address", "");
        const method = get(props, "method", "GET");
        const params = omit(get(props, "lib", {}), "api");
        return service.request({ url, params, method })
            .then((response) => {
                return transArray(response?.data ?? response);
            }).catch((error) => {
                return [];
            });
    }
    // 搜索检索
    async function search(props) {
        const url = get(props, "address", "");
        const method = get(props, "method", "GET");
        const lib = omit(get(props, "lib", {}), "api");
        const keyname = get(props, "field", "id");
        const query = get(props, "query", "");
        const params = mergeObject(lib, { [keyname]: query });
        return service.request({ url, params, method })
            .then((response) => {
                return transArray(response);
            }).catch((error) => {
                return [];
            });
    }
    // 文件上传
    function call(request) {
        const { file } = request;
        const address = import.meta.env.VITE_APP_SERVER_PREFIX + "/Common/UpFile";
        const body = new FormData();
        body.append("files", file);
        const tocancel = new AbortController();
        async function tocall() {
            const response = await service.request({
                url: address,
                method: "post",
                data: body,
                signal: tocancel.signal,
                onUploadProgress: (progress) => {
                    const { loaded, total } = progress;
                    const percent = (loaded / total) * 100;
                    request.onProgress({ percent });
                }
            });
            return transArray(response);
        }
        return {
            uid: file.uid,
            tocancel,
            tocall,
        }
    }
    // 文件下载
    async function down(file) {
        const fileAddress = import.meta.env.VITE_APP_SERVER_PREFIX + "/file";
        const url = fileAddress + file.url;
        return service.request({ url, method: "GET", responseType: 'blob' })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return {}
            });
    }

    return {
        enums,
        search,
        call,
        down
    }
}

export default useFormWorker;
