//                                          BİSMİLLAHİRRAHMANİRRAHİM



import { createStore, combineReducers } from "redux";

import { headerReducer } from "../reducers";


const rootReducer = combineReducers({all: headerReducer});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore