

import React, { Component } from 'react'
import SanPham from './SanPham'
import GioHang from './GioHang'


export default class DemoXemChiTiet extends Component {


    dsSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/products/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/products/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/products/applephone.jpg" }
    ]
    // Xác định sản phẩm chi tiết là dữ liệu thay đổi
    state = {
        sanPhamChiTiet: 
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", 
        "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", 
        "giaBan": 5700000, "hinhAnh": "./img/products/vsphone.jpg" },
        gioHang:
        [
            {maSP:2,tenSP:'Meizu 16Xs',hinhAnh:'./img/products/meizuphone.jpg',soLuong:1, giaBan:7600000},
        ]
    }
    xemChiTiet = (sanPhamClick) => {
        // console.log(sanPhamClick);
        // console.log('this.prop',this.props)
        //setstate
        this.setState ({
            sanPhamChiTiet:sanPhamClick
        })
    }
    // state đặt ở đâu hàm gọi setstate sẽ đặt cùng với state
    themGioHang = (sanPhamClick) => {
        console.log('spCLick',sanPhamClick);
        // từ sản phẩm click tạo ra sản phẩm có thuộc tính số lượng
        let spGioHang = {...sanPhamClick,soLuong:1};
        // lấy ra giỏ hàng từ state và xử lý
        let {gioHang} = this.state;
        // kiểm tra sp có trong giỏ hàng hay chưa
        let spGH = gioHang.find(sp => sp.maSP === sanPhamClick.maSP);
        if (spGH) { // co trong gio hang
            spGH.soLuong +=1;
        } else {
            // khong ton tai trong gio hang
            gioHang.push(spGioHang);
        }

        //setState
        this.setState({
            gioHang:gioHang
        })
    }

    xoaGioHang = (maSPClick) => {
        console.log('maSpClick',maSPClick);
        // xóa => tìm ra sp có chưa trong giỏ hàng và xóa đi
        
        let {gioHang} = this.state;
        // Cách 1: dùng ham find index
        // let index = gioHang.findIndex(sp=>sp.maSP === maSPClick); 
        // if (index != -1) {
        //     if (window.confirm('Bạn có muốn xóa giỏ hàng không ?')){
        //         gioHang.splice(1,index);
        //     }
        // } 

        // Cách 2: dùng ham filter
        if (window.confirm('Bạn có muốn xóa giỏ hàng không ?')){ 
                gioHang = gioHang.filter(sp=>sp.maSP !== maSPClick);
        }
        //setState
        this.setState ({
            gioHang:gioHang
        });
    }

    tangGiamSoLuong = (maSPClick,soLuong) => {
        // console.log('maSPCLick',maSPClick);
        // console.log('soLuong',soLuong);
        // tim ra sp
        let {gioHang} = this.state
        let spGH = gioHang.find(sp=>sp.maSP === maSPClick);
        console.log('spGH',spGH);
        if(spGH) {
            spGH.soLuong += soLuong;
            if (spGH.soLuong < 1) {
                if(window.confirm('Ban có muốn xóa sp không')) {
                    // xử lý xóa khi số lượng sau khi trừ nhỏ hơn
                    gioHang = gioHang.filter(sp => sp.maSP !== maSPClick);
                    this.setState ({
                        gioHang:gioHang
                    })
                    return;
                }
            }
            spGH.soLuong += 1;
        }
        //set state
        this.setState ({
            gioHang:gioHang
        });

    }

    tinhTongSoLuong = () => {
        let tongSoLuong = this.state.gioHang.reduce((soLuong, spGioHang, index) => {
            return soLuong += spGioHang.soLuong;
        },0)
       

        let tongTien = this.state.gioHang.reduce ((tien, spGioHang, index) => {
            return tien += spGioHang.soLuong * spGioHang.giaBan;    
        },0)
        return `${tongSoLuong} - ${tongTien.toLocaleString()}`;
    }
    render() {
        let {maSP,tenSP,manHinh,cameraSau,cameraTruoc,giaBan,heDieuHanh,hinhAnh,ram,rom} = this.state.sanPhamChiTiet
        return (
            <div className='container'>
                <div className='text-right'>
                    <span className='text-danger' style={{cursor:'pointer'}}>Giỏ hàng({this.tinhTongSoLuong()})</span>
                </div>
                <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}  />

                <h3 className='text-center'>Danh sách sản phẩm</h3>
                <div className="row">
                    {this.dsSanPham.map((dienThoai, index) => {
                       return <div className="col-4" key={index}>
                            <SanPham themGioHang={this.themGioHang} sanPham={dienThoai} xemChiTiet={this.xemChiTiet} />
                        </div>
                    })}


                </div>

                <div className="row mt-5">
                    <div className="col-4">
                        <h3>{tenSP}</h3>
                        <img src={hinhAnh} alt="" height={300} className="w-100" />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{rom}</th>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
}
