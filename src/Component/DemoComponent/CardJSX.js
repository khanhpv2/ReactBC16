//rcc: react class component  tạo ra stateful component
import React, { Component } from 'react'

export default class CardJSX extends Component {
    // Phương thức render là phương thức chứa nội dung html của component <CardJSX />
  render() {

    // nôi dung giao diện của thẻ nằm trong lênhj return của phuong thức render
    return (
      <div className='card w-25'>
            <img src='https://picsum.photos/200' className='w-100'  />   
            <div className='card-body'>
                <p>Iphone</p>
                <p>1000$</p>
            </div>
      </div>
    )
  }
}
