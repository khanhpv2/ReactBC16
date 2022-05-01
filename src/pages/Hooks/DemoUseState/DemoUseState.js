import React, {useState} from 'react'

export default function DemoUseState(props) { // thay vì this.props thì rfc có param là props
  const [stateNumber,setStateNumber] = useState(1); //useState(stateDefault)
  const [imgSrc,setImgSrc] = useState('https://i.pravatar.cc?u=1');  
  return (
    <div className='container'>
        <h3>Ví dụ 1: Tăng giảm số lượng</h3>
        <p>Number: {stateNumber}</p>
        <button className='btn btn-primary mr-2' onClick={()=> {
            // khi setState được gọi thì nguyên funtion sẽ chạy lại
            setStateNumber(stateNumber +1)
        }}>+</button>
        <button className='btn btn-primary mr-2' onClick={()=> {
            setStateNumber(stateNumber -1)
        }}>-</button>
        <hr />
        <h3>Ví dụ 2: Ứng dụng tìm bạn</h3>
        <div className='card w-25'>
            <img src={imgSrc}  alt='...' />
            <div className='card-body bg-dark text-white'>
                <button className='btn btn-success text-center' onClick={()=> {
                    let number = Math.floor(Math.random() * 100);
                    let newImgSrc = `https://i.pravatar.cc?u=${number}`;
                    setImgSrc(newImgSrc)
                }}>Random</button>
            </div>
        </div>
    </div>
  )
}
