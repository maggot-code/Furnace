/*
 * @FilePath: /Furnace/src/domain/curd/usecase/useCurdTable.js
 * @Author: maggot-code
 * @Date: 2022-12-06 01:17:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-12-06 01:17:46
 * @Description: 
 */
import { CURD_TABLE_SYMBOL } from "../shared/context";

export function useCurdTable() {
    const table = inject(CURD_TABLE_SYMBOL);
    return table;
}

export default useCurdTable;
