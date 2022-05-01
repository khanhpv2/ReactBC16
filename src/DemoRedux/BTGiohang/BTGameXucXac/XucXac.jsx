import React, { Component } from 'react'
// kết nối redux
import { connect } from 'react-redux'
 class XucXac extends Component {
    renderKetQua = () => {
        let tongDiem = this.props.mangXucXac.reduce ((diem,xucXac) =>{
            return diem + xucXac.diem
        },0)
        let ketQua  =  tongDiem>11 ? 'Tài' :'Xỉu';
        return <p className='display-4 text-center'>{ketQua} - {tongDiem}</p>
    } 
    render() {
        console.log('propmangxucxac',this.props)
        return (
            <div className='row mt-3 text-center'>
                <div className="col-4">
                    <button className='btn btn-danger'>
                        <div className="display-4 p-5" onClick={()=>{
                            // tạo ra 1 action gửi lên store
                            const action = {
                                type:'DAT_CUOC',
                                banChon:true
                            }
                            // dùng this.props.dispatch để gửi dữ liệu lên redux
                            this.props.dispatch(action);
                        }}>
                            TÀI
                        </div>
                    </button>
                </div>
                <div className="col-4 ">
                    {this.props.mangXucXac.map ((xucXac,index)=> {
                       return <img key={index} width={50} height={50} src={xucXac.src} alt="....." />
                    })}
                    {/* <img width={50} height={50} src="./img/gameXucXac/1.png" alt="abcd" />
                    <img width={50} height={50} src="./img/gameXucXac/2.png" alt="abcd" />
                    <img width={50} height={50} src="./img/gameXucXac/3.png" alt="abcd" /> */}
                    <div className="mt-3">
                        {/* <p className='display-4 text-center'>Tài - 11</p> */}
                        {this.renderKetQua()}
                    </div>
                </div>
                <div className="col-4">
                    <button className='btn btn-danger'>
                        <div className="display-4 p-5" onClick={()=>{
                            // tạo ra 1 action gửi lên store
                            const action = {
                                type:'DAT_CUOC',
                                banChon:false
                            }
                            // dùng this.props.dispatch để gửi dữ liệu lên redux
                            this.props.dispatch(action);
                        }}>
                            XỈU
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac:rootReducer.XucXacReducer.mangXucXac
    }
}
export default connect(mapStateToProps)(XucXac)
/* 
    Xử lý dispatch:
    + Cách 1: Định nghĩa hàm mapDispacthToProps truyền vào tham số thứ 2 của hàm connect 
    + Cách 2: Bỏ trống tham số thứ 2 (nếu truyền mapdispatch thì sẽ  không sử dụng được cách này)
*/
// cách xử lý