<!--
 * @FilePath: /Furnace/src/App.vue
 * @Author: maggot-code
 * @Date: 2022-11-10 22:41:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-11 01:24:16
 * @Description: 
-->
<script setup>
const tableData = [
    {
        hobby1: "睡觉",
        hobby2: "睡觉",
        age: 18,
        name: "AAA",
    },
    {
        hobby1: "睡觉",
        hobby2: "吃饭",
        age: 16,
        name: "BBB",
    },
    {
        hobby1: "睡觉",
        hobby2: "游戏",
        age: 16,
        name: "CCC",
    },
    {
        hobby1: "听歌",
        hobby2: "游戏",
        age: 16,
        name: "DDD",
    },
];

const keywords = ["hobby1"];
const cache = {};
const pond = {};

tableData.forEach((row, x, source) => {
    const fields = Object.keys(row);
    fields.forEach((field, y) => {
        pond[`${x}-${y}`] = {
            rowspan: 1,
            colspan: 1,
        }
    });
    const filter = fields.filter((key) => keywords.includes(key));
    filter.forEach((field, y) => {
        const cell = row[field];
        const cellRight = filter[y + 1] && row[filter[y + 1]];
        const cellDown = source[x + 1] && source[x + 1][field];
        cache[`${x}-${y}`] = {
            value: cell,
            right: cellRight,
            down: cellDown,
            hasRight: !!cellRight,
            hasDown: !!cellDown,
        };
    });
});

for (const key in cache) {
    const [x, y] = key.split('-');
    const { value, right, down, hasRight, hasDown } = cache[key];
    console.log(`${x}-${y}`, value, right, down, hasRight, hasDown);
}

console.table(pond);

// [行, 列] {rowspan:1, colspan:1}
function spanMethod({ row, rowIndex, column, columnIndex }) {
    const key = `${rowIndex}-${columnIndex}`;
    return pond[key];
}
</script>

<template>
    <el-table :data="tableData" :span-method="spanMethod" :border="true" style="width: 100%;height: 100%;">
        <el-table-column label="Hobby">
            <el-table-column prop="hobby1" label="" />
            <el-table-column prop="hobby2" label="" />
        </el-table-column>
        <el-table-column prop="age" label="Age" />
        <el-table-column prop="name" label="Name" />
    </el-table>
</template>

<style scoped>

</style>
