import React, { Component } from 'react'

export default class HandleEvent extends Component {

  showMesage = () => {
      alert ('Hello hello !!!');
  }
  sayHello = (name) => {
      alert('Hi'+' '+ name);
  }


  render() {
    return (
      <div className='container'>
          <h3>HandleEvent</h3>
           <button id='btn' className='btn btn-success' onClick={this.showMesage}>Click me</button>
           <button id='btn' className='btn btn-success' onClick={() => {
            alert('Hello hello !!!');
            }}>Click me</button>

         <hr />
         <h3>Xử lý sự kiện khi có tham số</h3>
         <button className='btn btn-success' onClick={this.sayHello.bind(this,'Khải')} >Say hello</button>
         <button className='btn btn-primary' onClick={() =>{
             this.sayHello('abcd');
             // gọi nhiêu hàm cùng lúc ...
         }}>Say hello 2</button>
      </div>
    )
  }
}
