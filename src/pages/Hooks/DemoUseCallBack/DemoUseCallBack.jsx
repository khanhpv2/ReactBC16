import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

export default function DemoUseCallBack(props) {
  const [like,setLike] = useState(1);
  const [number,setNumber] = useState(1);  
  const renderNumber = () => {
      return number + 'number'
  }
  const callBackRenderNumber = useCallback(renderNumber,[number])
  return (
    <div className='container'>
        <h3>Demo useCallBack</h3>
        <div className='bg-dark text-white mt-2 p-5'>
            <h3>Number: {number}</h3>
            <h3>Like: {like}</h3>
        </div>
        <div className="form-group">
            <button className='btn btn-success' onClick={()=>{
                setNumber(number+1)
            }}>Number</button>
            <button className='btn btn-danger ml-2' onClick={()=>{
                setLike(like +1)
            }}>Like</button>
        </div>
        <hr />
        <ChildComponent number={number} renderNumber={callBackRenderNumber} />
    </div>
  )
}
