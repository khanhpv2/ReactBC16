import React, { Component } from 'react'

export default class cl  extends Component {

  render() {
    let {gioHang,xoaGioHang,tangGiamSoLuong} = this.props //[{...},{...}]
    return (
      <div className='table' >
          <thead>
              <tr>
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Giá bán</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
            
              {gioHang.map((spGH,index) => {
                  return <tr key={index}>
                  <td>{spGH.maSP}</td>
                  <td>{spGH.tenSP}</td>
                  <td><img src={spGH.hinhAnh} width={50} height={50} /></td>
                  <td>{spGH.giaBan.toLocaleString()}</td>
                  <td>
                    <button className='btn btn-primary mr-2' onClick={() =>{
                      tangGiamSoLuong(spGH.maSP,1)
                    }}>+</button>
                    {spGH.soLuong}
                    <button className='btn btn-primary ml-2' onClick={() =>{
                      tangGiamSoLuong(spGH.maSP,-1)
                    }}>-</button>
                    </td>
                  <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                  <td>
                      <button className='btn btn-danger' onClick={() =>{
                         xoaGioHang(spGH.maSP)
                         // this.props.xoaGioHang
                      }}>Xóa</button>
                  </td>
                </tr>
              })}
              
          </tbody>
      </div>
    )
  }
}
