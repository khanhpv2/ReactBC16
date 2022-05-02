import React, { useEffect, useState } from 'react'
let timeout = {};
export default function DemoUseEffect(props) {

  const [state,setState] = useState(1)
  const [like,setLike] = useState(1)

//   useEffect(()=>{
//       console.log('thực thi sau khi giao diện được khởi tạo -componentDidMount')
//       console.log('thực thi sau khi state hoặc props thay đổi- componentDidUpdate')
//   })

//   useEffect(()=>{
//       console.log('tương tự như componentDidmount - chạy 1 lần sau khi giao diện render - thường sử dụng cho các thư viện hoặc gọi api sau này ')
//       //gọi api
//       // hoặc call api các hàm thư viên
//   },[]);
  useEffect(()=>{
    console.log('chỉ khi tham số state thứ 2 thay đổi (sau khi render) thì mới gọi lại hàm này thực thi - ứng với componentDidUpdate ')
    //gọi api
    // hoặc call api các hàm thư viên
  },[state]); //shallow compare: so sanh string,number,boolean

  useEffect(()=>{
    timeout = setInterval(()=>{
        console.log('gọi api')
    },1000)  
    return () => {
        clearInterval(timeout);
        console.log('hàm chạy trước khi component mất khỏi giao diện - giống componentWillUnmount')
    }
  },[])  

  return (
    <div>
        <h3>Demo useEffect</h3>
        <h3>Number: {state} </h3>
        <h3>Like: {like} </h3>
        <button className='btn btn-success' onClick={()=>{
            setState (state +1);
        }}>+</button>
        <button className='btn btn-success' onClick={()=>{
            setLike (like +1);
        }}>Like</button>
    </div>
  )
}
