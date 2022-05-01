import React, { Component } from 'react'

export default class Login extends Component {


  handleLogin = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    // xử lý nếu username và password = cybersoft chuyển đến trang 
    // profile  ngược lại thì alert ra tài khoản mật khẩu không đúng
    if (username ==='cybersoft' && password === 'cybersoft' ) {
      // chuyến hướng trang this.props.history
      this.props.history.push('profile');
      // this.props.history.replace('profile');
      // lưu dữ liệu vào localstorage
      localStorage.setItem('userlogin','cybersoft');
      
    } else {
      alert ('Tài khoản hoặc mật khẩu không đúng')
    }
  }
  render() {
    console.log(this.props)
    return (
      <div className='container'>
          <h3>Login</h3>
          <div className='form-group'>
             <p>Username</p>
             <input className='form-control' name='username' id='username' />
          </div>
          <div className='form-group'>
             <p>Password</p>
             <input className='form-control' name='password' id='password' />
          </div>
          <div className='form-group'>
              <button onClick={this.handleLogin} className='btn btn-success'>Login</button>
          </div>
          <button className='btn btn-link' onClick={()=>{
                this.props.history.goBack();
                           
          }}>Trỏ về</button>
      </div>
    )
  }
}
