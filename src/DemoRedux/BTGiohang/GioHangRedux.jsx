import React, { Component } from 'react'
// kết nối redux
import { connect } from 'react-redux'


class GioHangRedux extends Component {
  render() {
    console.log('this.prop', this.props)
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Mã sp</th>
            <th>Tên SP</th>
            <th>Hình ảnh</th>
            <th>Giá bán</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {this.props.gioHang.map((spGH, index) => {
           return <tr key={index}>
              <td>{spGH.maSP}</td>
              <td>{spGH.tenSP}</td>
              <td>
                <img src={spGH.hinhAnh} alt="" width={50} height={50} />
              </td>
              <td>{spGH.giaBan}</td>
              <td>
                <button className='btn btn-primary ml-2' onClick={() =>{
                  this.props.tangGiamSoLuong(spGH.maSP,1)
                }}>+</button>
                 {spGH.soLuong}
                <button className='btn btn-primary ml-2' onClick={() =>{
                  this.props.tangGiamSoLuong(spGH.maSP,-1)
                }}>-</button>
              </td>
              <td>{spGH.giaBan * spGH.soLuong}</td>
              <td>
                <button className='btn btn-primary ml-2' onClick={() =>{
                  this.props.xoaGioHang(spGH.maSP);
                }}>Xóa</button>
              </td>
            </tr>
          })}

        </tbody>
      </table>
    )
  }
}

// lấy state từ redux về biến thành props component
const mapStateToProps = (rootReducer) => {
  //muốn lấy dữ liệu nào về thì tạo ra thuộc tính lấy giá trị từ redux
  return {
    gioHang: rootReducer.gioHangState
  }
}
// viết mapdispathchtoprops định nghĩa hàm gửi dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      console.log('maSPClick',maSPClick);
      const action = {
        type:'XOA_GIO_HANG',
        maSPClick
      }
      // đưa dữ liệu lên redux
      dispatch(action);
    },
    tangGiamSoLuong : (maSPClick,soLuong) => {
      console.log(maSPClick,soLuong);
      // tạo ra các action gui len reducer
      const action = {
        type:'TANG_GIAM_SO_LUONG',
        maSPClick,
        soLuong
      }
      // đưa dữ liệu lên redux
      dispatch(action);
    }
  }
}
//Cú pháp tạo ra 1 component có lien kết redux
export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux)


