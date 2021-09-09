


import { reduxConst } from "../../constants";
import initialState from "../state";

const headerUpdated = (state, action) => (
    {
        ...state,
        header: action.payload
    }
)

export const headerReducer = (state = initialState, action) => {
    switch(action.type){
        case reduxConst.HEADER_UPDATED:
            return headerUpdated(state, action);
        default:
            return state
    }
}