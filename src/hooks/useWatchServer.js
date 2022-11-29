/*
 * @FilePath: \Furnace\src\hooks\useWatchServer.js
 * @Author: maggot-code
 * @Date: 2022-11-27 01:16:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-29 20:47:14
 * @Description: 
 */
import { toFunction } from "@/shared/trans";

export function useWatchServer(server, props) {
    const toHandler = isFunction(props) ? props : flow([
        toFunction(props.trans),
        toFunction(props.setup),
        toFunction(props.next)
    ]);

    const unwatchEffect = watchEffect(() => {
        unref(server.started) && toHandler(unref(server.result.source));
    });

    onUnmounted(() => {
        unwatchEffect();
    });
    return unwatchEffect;
}

export default useWatchServer;
