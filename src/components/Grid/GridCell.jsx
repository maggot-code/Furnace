/*
 * @FilePath: /Furnace/src/components/Grid/GridCell.jsx
 * @Author: maggot-code
 * @Date: 2022-12-13 10:57:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-15 13:53:26
 * @Description:
 */
import "./cell.scss";
import { defineComponent, computed, unref } from "vue";

export default defineComponent({
    name: "GridCell",
    props: {
        spanStart: {
            type: Array,
            default: () => [0, 0],
        },
        spanEnd: {
            type: Array,
            default: () => [0, 0],
        },
        index: {
            type: Number,
            default: 0,
        },
        cup: {
            type: Number,
            default: 0,
        },
    },
    setup(props) {
        const gridRowStart = computed(() => {
            return props.spanStart[0];
        });
        const gridColumnStart = computed(() => {
            return props.spanStart[1];
        });
        const gridRowEnd = computed(() => {
            return props.spanEnd[0];
        });
        const gridColumnEnd = computed(() => {
            return props.spanEnd[1];
        });

        const style = computed(() => {
            return {
                gridRowStart: unref(gridRowStart),
                gridColumnStart: unref(gridColumnStart),
                gridRowEnd: unref(gridRowEnd),
                gridColumnEnd: unref(gridColumnEnd),
            };
        });

        return {
            style,
        };
    },
    render(createElement) {
        return createElement(
            "div",
            {
                class: "grid-cell",
                style: this.style,
            },
            this.$slots.default
        );
    },
});
