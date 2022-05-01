import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
      // Dung props lây thong tin từ component cha truyền vào
    let { sanPham } = this.props;

    return (
    <div className="card">
        <img src={sanPham.hinhAnh} alt="" height={300} />
        <div className="card-body">
            <h3>{sanPham.tenSP}</h3>
            <p>{sanPham.giaBan.toLocaleString()}</p>
            <button className='btn btn-success' onClick={() => {
                    // this.xemChiTiet(dienThoai)
                    this.props.xemChiTiet(sanPham);
            }}>Xem Chi tiết</button>
            <button className='btn btn-danger ml-2' onClick={() =>{
              this.props.themGioHang(sanPham);
            }}>Thêm giỏ hàng</button>
        </div>
    </div>
    )
  }
}
