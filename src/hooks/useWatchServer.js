/*
 * @FilePath: /Furnace/src/hooks/useWatchServer.js
 * @Author: maggot-code
 * @Date: 2022-11-27 01:16:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 20:34:08
 * @Description: 
 */
import { toFunction } from "@/shared/trans";

export function useWatchServer(server, props) {
    const toHandler = flow([
        toFunction(props.trans),
        toFunction(props.setup),
        toFunction(props.next)
    ]);

    const unwatchEffect = watchEffect(() => {
        toHandler(unref(server.result.source));
    });

    onUnmounted(() => {
        unwatchEffect();
    });
    return unwatchEffect;
}

export default useWatchServer;
