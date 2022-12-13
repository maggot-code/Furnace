/*
 * @FilePath: \Furnace\src\components\Grid\GridView.jsx
 * @Author: maggot-code
 * @Date: 2022-12-13 10:44:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-13 14:32:39
 * @Description:
 */
import "./grid.scss";
import GridCell from "./GridCell";
import { uuid } from "~/shared/uuid";
import { mergeObject } from "~/shared/merge";
import { defineComponent, computed, unref } from "vue";

export default defineComponent({
    name: "GridView",
    props: {
        cup: {
            type: Number,
            default: 12,
        },
        colGap: {
            type: Number,
            default: 0,
        },
        rowGap: {
            type: Number,
            default: 0,
        },
    },
    setup(props, { slots }) {
        const slotGroup = computed(() => {
            return slots.default ? slots.default() : [];
        });
        const gridColumnGap = computed(() => `${props.colGap}px`);
        const gridRowGap = computed(() => `${props.rowGap}px`);
        const style = computed(() => {
            return {
                gridTemplateColumns: `repeat(${props.cup}, minmax(0, 1fr))`,
                // gridTemplateRows: `repeat(${props.cup}, minmax(0, 1fr))`,
                gridColumnGap: unref(gridColumnGap),
                gridRowGap: unref(gridRowGap),
            };
        });
        return {
            slotGroup,
            style,
        };
    },
    render(createElement) {
        const children = this.slotGroup.map((child, index) => {
            const key = uuid();

            return createElement(
                GridCell,
                {
                    props: mergeObject(
                        {
                            key,
                            index,
                            cup: this.cup,
                        },
                        child.componentOptions.propsData
                    ),
                },
                child.componentOptions.children
            );
        });

        return createElement(
            "div",
            {
                class: "grid-view",
                style: this.style,
            },
            children
        );
    },
});
