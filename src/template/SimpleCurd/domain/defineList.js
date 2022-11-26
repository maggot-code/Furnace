/*
 * @FilePath: /Furnace/src/template/SimpleCurd/domain/defineList.js
 * @Author: maggot-code
 * @Date: 2022-11-26 23:59:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 03:24:40
 * @Description: 
 */
import { TableEntitySymbol } from "../shared/context";

export function defineList(props) {
    const { tableElement, tableSchema } = props;

    provide(TableEntitySymbol, {
        element: tableElement,
        schema: tableSchema
    });

    return {}
}

export default defineList;
