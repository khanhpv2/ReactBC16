import React, { useRef, useState } from 'react'

/*
    useRef: Dùng để lưu trữ các giá trị thay đổi sau các lân render
    useRef: Dùng để chứa các giá trị thay đổi mà không cần render lại giao diện
*/
export default function DemoUseRef(props) {
//   const [userLogin,setUserlogin] = useState({username:'',password:''})
  const [number,setNumber] =useState(1);
  const userLoginRef = useRef ({username:'',password:''});
  const userNameTagRef = useRef({})
  const passwordTagRef = useRef({})
  console.log('render lai giao dien')   

  const handleChange = (event) => {
     let {value,name} = event.target
     console.log('userLogin',userLoginRef.current)
     userLoginRef.current[name] = value;
     console.log(userLoginRef.current)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('username',userNameTagRef.current.value);
    // console.log('username',passwordTagRef.current.value);
    // passwordTagRef.current.style.backgroundColor = 'red';
 
  }


  return (
    <form className='container mt-5' onSubmit={handleSubmit}>
        <h3>number: {number}</h3>
        <button className='btn btn-success' type='button' onClick={()=>{
            setNumber(number+1)
        }}>+</button>
        <h3>Login</h3>
        <div className="form-group">
            <p>User name</p>
            <input ref={userNameTagRef} type="text" className='form-control' name='username' onChange={handleChange} />
        </div>
        <div className="form-group">
            <p>Password</p>
            <input ref={passwordTagRef} type="text" className='form-control' name='password' onChange={handleChange} />
        </div>
        <div className="form-group">
            <button type='submit' className='btn btn-success'>Login</button>
        </div>
    </form>
  )
}
