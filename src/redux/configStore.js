import {applyMiddleware, combineReducers, createStore} from 'redux' ;
import { fakeBookAppReducer } from './reducers/fakeBookAppReducer';
import { formDangKyReducer } from './reducers/formDangKyReducer';
import { gioHangReducer } from './reducers/gioHangreducer';
import { phimReducer } from './reducers/phimReducer';
import { arrTaskReducer } from './reducers/todoAppReducer';
import {XucXacReducer} from './reducers/xucxacReducer'
// cấu hính middleware redux thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk'
import { modalReducer } from './reducers/modalReducer';


const rootReducer = combineReducers ({
    // các state ứng dụng đặt ở đây
    gioHangState:gioHangReducer, 
    // nhiều state
    XucXacReducer:XucXacReducer,
    formDangKyReducer,
    fakeBookAppReducer,
    arrTaskReducer,
    phimReducer,
    modalReducer:modalReducer
    

})

const middleware = [
    reduxThunk,
];
const customCompose = composeWithDevTools(applyMiddleware(...middleware))

export const store  = createStore(rootReducer, customCompose );
