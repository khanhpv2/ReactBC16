import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// cấu hình redux
import {Provider} from 'react-redux';
import {store} from './redux/configStore'
// import { createStore } from 'redux';
// cau hinh ant design
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


// const store = createStore(rootReducer)
ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,

  document.getElementById('root')
);

// If you want to start measuri ng performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
