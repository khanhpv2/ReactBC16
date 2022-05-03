import {combineReducers, createStore} from 'redux' ;
import { fakeBookAppReducer } from './reducers/fakeBookAppReducer';
import { formDangKyReducer } from './reducers/formDangKyReducer';
import { gioHangReducer } from './reducers/gioHangreducer';
import { arrTaskReducer } from './reducers/todoAppReducer';
import {XucXacReducer} from './reducers/xucxacReducer'



const rootReducer = combineReducers ({
    // các state ứng dụng đặt ở đây
    gioHangState:gioHangReducer, 
    // nhiều state
    XucXacReducer:XucXacReducer,
    formDangKyReducer:formDangKyReducer,
    fakeBookAppReducer:fakeBookAppReducer,
    arrTaskReducer:arrTaskReducer
    

})

export const store  = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
