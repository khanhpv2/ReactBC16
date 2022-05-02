import React, {useState} from 'react'

export default function BaiTapChonXeRFC(props) { // thay vì this.props thì rfc có param là props
  
    
  const  [imgSrc,setImgSrc] = useState('./img/products/black-car.jpg');

  return (
    <div className='bt-chon-xe'>
        <div className="row">
            <div className="col-6">
                <img src={imgSrc} alt="" className='w-100' />
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-3">
                        <button className='btn' style={{backgroundColor:'red',color:'#fff'}} onClick={()=>{
                            setImgSrc('./img/products/red-car.jpg')
                        }}>Red card</button>
                    </div>
                    <div className="col-3">
                        <button className='btn' style={{backgroundColor:'black',color:'#fff'}} onClick={()=>{
                            setImgSrc('./img/products/black-car.jpg')
                        }}>Black card</button>
                    </div>
                    <div className="col-3">
                        <button className='btn' style={{backgroundColor:'silver',color:'#fff'}} onClick={()=>{
                            setImgSrc('./img/products/silver-car.jpg')
                        }} >Silver card</button>
                    </div>
                    <div className="col-3">
                        <button className='btn' style={{backgroundColor:'#EEE',color:'#fff'}} onClick={()=>{
                            setImgSrc('./img/products/steel-car.jpg')
                        }}>Steel card</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
 

