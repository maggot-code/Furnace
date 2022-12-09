/*
 * @FilePath: \Furnace\src\domain\Form\entity\Schema.js
 * @Author: maggot-code
 * @Date: 2022-12-04 21:09:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-09 10:21:25
 * @Description: 
 */
import { useShallowObject } from "@/hooks/ref/useShallowObject";
import { useShallowArray } from "@/hooks/ref/useShallowArray";

export function SchemaEntity() {
    const formConfig = useShallowObject();
    const cellConfig = useShallowArray();
    const formSchema = computed(() => {
        return unref(formConfig.source)
    });
    const cellSchema = computed(() => {
        return unref(cellConfig.source)
    });

    // 由于错误的用法导致需要该函数用来配合重新设置数据
    // 经过测试在tableTable被消费的时候就会出现cellSchema被重置的问题
    // 但是原因没有找到，所以只能通过该函数来解决
    function cover(dataSource) {
        const schema = (unref(cellSchema)).map((cell) => {
            cell.value = dataSource[cell.field];
            return cell;
        });
        cellConfig.setup(schema);
    }

    return {
        formConfig,
        cellConfig,
        formSchema,
        cellSchema,
        cover,
    }
}

export default SchemaEntity;
