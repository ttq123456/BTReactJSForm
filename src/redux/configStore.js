import { combineReducers, createStore } from "redux";
import { thongTinSinhVienReducer } from "./ThongTinSinhVienReducer";


const rootReducer = combineReducers({
    thongTinSinhVienReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());