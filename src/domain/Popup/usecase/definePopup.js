/*
 * @FilePath: \Furnace\src\domain\Popup\usecase\definePopup.js
 * @Author: maggot-code
 * @Date: 2022-12-05 14:10:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 17:11:19
 * @Description: 
 */
import { POPUP_SYMBOLE } from "../shared/context";
import { useShallowObject } from "@/hooks/ref/useShallowObject";

function providePopup(wrap) {
    provide(POPUP_SYMBOLE, wrap);
    return wrap;
}

export function definePopup() {
    const record = ref(0);
    const cache = useShallowObject();
    const pond = computed(() => {
        return Object.keys(unref(cache.source));
    });
    const pondFind = computed(() => {
        return (key) => cache.take(key);
    });
    function pondRelease(key) {
        return (done) => {
            const entity = cache.take(key);
            isFunction(done) && done();
            entity.state.toDisable();
            cache.remove(key);
        }
    }
    function toRecord() {
        record.value++;
        return unref(record);
    }
    function toPond(entity) {
        const { uid } = entity;
        cache.bind(uid, entity);
    }

    return providePopup({
        cache,
        pond,
        pondFind,
        pondRelease,
        toRecord,
        toPond,
    });
}

export default definePopup;
