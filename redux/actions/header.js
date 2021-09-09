

import { reduxConst } from "../../constants";

export function updateHeader(newHeader){
    return {
        type: reduxConst.HEADER_UPDATED,
        payload: newHeader
    }
}