import React, { useState } from 'react'
import ModalHOC from './ModalHOC'
import Home from '../Home/Home'
import Register  from '../Register/Register'
import Login from '../Login/Login'
import { useDispatch } from 'react-redux'
// HOC: higher order componnent
// lý thuyết: là 1 component nhận vào 1 tham số là 1 component khác để xử lý và trả ra 1 component mới
// => tái sử dụng lại logic của component (giao diện)

export default function DemoHOC(props) {
    // const [component,setComponent] = useState(<p>Default component</p>)
    const dispatch = useDispatch();
  return (
    <div className='container'>
        <h3>Demo modal popup</h3>
        <button className='btn btn-success mr-2' data-toggle="modal" data-target="#modelId" onClick={()=>{
            const action = {
              type: 'OPEN_MODAL',
              component: <Register {...props}/>
            }
            dispatch(action)
        }}>Đăng ký</button>
        <button className='btn btn-success ml-2' data-toggle="modal" data-target="#modelId" onClick={()=>{
            const action = {
              type: 'OPEN_MODAL',
              component: <Register {...props}/>
            }
            dispatch(action)
        }}>Đăng nhập</button>
        <hr />
       
    
    </div>
  )
}
