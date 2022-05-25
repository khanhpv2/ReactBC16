import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhimApiAction } from '../../redux/action/types/phimAction';
import { http, TOKEN_CYBERSOFT } from '../../util/config';

export default function HomeMobile(props) {


  const {arrPhim} = useSelector(state => state.phimReducer);
  const dispatch = useDispatch();
  useEffect (async ()=>{
    
   /*
      dispatch redux có dạng aciton
      action: {type ,data} => có dữ liệu sẵn muốn đưa lên redux
      action2: (dispatch) => {} dành cho các nghiệp vụ phải qua xử lý thì mới có được dữ liệu
    */
   const action = getPhimApiAction('GP07');
      dispatch(action)

  },[])


  console.log(arrPhim)


  const renderPhim = () => {
    return arrPhim.map((phim,index)=>{
      return <div className='col-6'>
          <div className='d-flex'>
                <img src={phim.hinhAnh} height={75} width={100} alt="..." />
                <div>
                    <p>{phim.moTa >100 ? phim.moTa.substr(0,50) + '...' : phim.moTa}</p>
                    <button className='btn btn-success'>Đặt vé</button>
                </div>
          </div>
      </div>
    })
  }
  return (
    <div className='container'>
      <h3 className='text-center'>Danh sách phim</h3>
        <div className='row'>
         {renderPhim()} 
        </div>      

    </div>
  )
}
