import {combineReducers, createStore} from 'redux' ;
import { formDangKyReducer } from './reducers/formDangKyReducer';
import { gioHangReducer } from './reducers/gioHangreducer';
import {XucXacReducer} from './reducers/xucxacReducer'



const rootReducer = combineReducers ({
    // các state ứng dụng đặt ở đây
    gioHangState:gioHangReducer, 
    // nhiều state
    XucXacReducer:XucXacReducer,
    formDangKyReducer:formDangKyReducer

})

export const store  = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
