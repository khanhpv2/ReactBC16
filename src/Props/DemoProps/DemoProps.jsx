
import React, { Component } from 'react'
import CardProduct from './CardProduct'
import UserDetail from './UserDetail'

export default class DemoProps extends Component {
  
    hocVien = {
        hoTen: 'Nguyễn Văn A',
        ngaySinh:'10-10-1999',
        email:'flkjflkj@gmail.com',
        soDienThoai: '09090333',
        hinhAnh: 'https://i.pravatar.cc?u=22'
    }      
    danhSachHocVien = [
    {    
        hoTen: 'Nguyễn Văn A',
        ngaySinh:'10-10-1999',
        email:'flkjflkj@gmail.com',
        soDienThoai: '09090333',
        hinhAnh: 'https://i.pravatar.cc?u=22'
    },
    {    
        hoTen: 'Nguyễn Văn B',
        ngaySinh:'18-8-1998',
        email:'flkjflkj@gmail.com',
        soDienThoai: '60654654',
        hinhAnh: 'https://i.pravatar.cc?u=23'
    },
    {    
        hoTen: 'Lê Văn B',
        ngaySinh:'20-8-1933',
        email:'fdfdf@gmail.com',
        soDienThoai: '93893898',
        hinhAnh: 'https://i.pravatar.cc?u=24'
    }
    ]

    renderHocVien  = () => {
        return  this.danhSachHocVien.map ((hv,index) => {
            return <div className='col-6 mt-2' key={index}>
                <UserDetail hocVien={hv} />
            </div>
        })
       
    }
  render() {
    return (
      <div className='container'>
          <h3>Demo Props</h3>
          <div className='w-25'>
            <CardProduct img="https://i.pravatar.cc?u=5" name='Iphone' price="1000"/>
          </div>
          <div className='w-25'>
            <CardProduct img="https://i.pravatar.cc?u=10" name='Samsung' price="2000"/>
          </div>
          <hr />
           <h3>Thông tin cá nhân</h3>
           <UserDetail hocVien={this.hocVien} />
           <hr />
           <h3>Danh sách học viên</h3>
           <div className='row'>
               {this.renderHocVien()}  
           </div> 
      </div>
    )
  }
}
