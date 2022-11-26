/*
 * @FilePath: /Furnace/src/template/SimpleCurd/domain/defineSearch.js
 * @Author: maggot-code
 * @Date: 2022-11-26 16:24:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-11-27 03:21:20
 * @Description: 
 */
import { SearchEntitySymbol } from "../shared/context";

export function defineSearch(props) {
    const { searchElement, searchSchema } = props;

    provide(SearchEntitySymbol, {
        element: searchElement,
        schema: searchSchema
    });

    return {}
}

export default defineSearch;
