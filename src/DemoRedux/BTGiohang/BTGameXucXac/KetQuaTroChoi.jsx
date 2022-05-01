import React, { Component } from 'react'
// kết nối redux
import { connect } from 'react-redux'
// import cl from '../../../Props/DemoProps/DemoXemChiTiet/GioHang'
class KetQuaTroChoi extends Component {
  render() {
    console.log('props',this.props);
    let {banChon,tongSoBanChoi,soBanThang} = this.props.xucXacState;
    return (
      <div className='display-4 mt-5 text-center'> 
          <div>
              <span>Bạn chọn: <span className='text-success'>{banChon ? 'Tài' : 'Xỉu'}</span> </span>
          </div>
          <div>
              <span>Tổng số bàn thắng: <span className='text-danger'>{soBanThang}</span> </span>
          </div>
          <div>
              <span>Tổng số bàn chơi:<span className='text-warning'>{tongSoBanChoi}</span> </span>
          </div>
          <button className='btn bg-success'>
              <div className="text-white pl-5 pr-5 pt-2 pb-2 display-4" onClick={()=>{
                  const action = {
                      type:'PLAY_GAME'
                    //   mangXucXac: [{},{}]
                  };
                  // gửi action lên redux
                  this.props.dispatch(action);
              }}>Play game</div>
          </button>
      </div>
    )
  }
}

// viết hàm  lấy dữ liệu từ redux về biến thành props component
const mapStateToProps  = (rootReducer) => {
    return {
       xucXacState: rootReducer.XucXacReducer
    //    banChon: rootReducer.XucXacReducer.banChon
    }
}

// kết nối với redux
export default connect(mapStateToProps)(KetQuaTroChoi);
