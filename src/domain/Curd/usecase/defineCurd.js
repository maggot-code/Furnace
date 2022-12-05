/*
 * @FilePath: \Furnace\src\domain\Curd\usecase\defineCurd.js
 * @Author: maggot-code
 * @Date: 2022-12-05 11:02:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-05 11:19:49
 * @Description: 
 */
import { useShallowObject } from "@/hooks/ref/useShallowObject";

const NormCollect = {
    formReady: false,
    tableReady: false,
    form: {},
    table: {},
};

export function defineCurd() {
    const collect = useShallowObject(NormCollect);
    const params = computed(() => {
        return collect.take("table");
    });
    const data = computed(() => {
        return collect.take("form");
    });
    const ready = computed(() => {
        return (collect.take("formReady") && collect.take("tableReady"));
    });
    function setupFormReady() {
        if (collect.take("formReady")) return;
        collect.bind("formReady", true);
    }
    function setupTableReady() {
        if (collect.take("tableReady")) return;
        collect.bind("tableReady", true);
    }
    function formFactor(value) {
        collect.bind("form", value);
    }
    function tableFactor(value) {
        collect.bind("table", value);
    }
    function toFactor() {
        return {
            params: unref(params),
            data: unref(data),
        }
    }

    return {
        ready,
        setupFormReady,
        setupTableReady,
        formFactor,
        tableFactor,
        toFactor,
    }
}

export default defineCurd;
