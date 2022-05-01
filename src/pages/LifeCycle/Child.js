import { toHaveClass } from '@testing-library/jest-dom/dist/matchers';
import React, { Component, PureComponent } from 'react'

export default class Child extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            
        }
        console.log('constructor child')
      }
     // hàm dung đẻ can thiệt quá trinh thay đổi state và props trước khi render ra giao diện
      static getDerivedStateFromProps (newProps,currentState) {
        // hàm nhận vào props mới (sau khi thay đổi !=this.props) và this.state
        // => xử lý trả về state mới  
        console.log('getDerivedStateFormProps child');
        return currentState;
      }
      /* Khi sử dụng purecomponent => thì chỉ so sanh props cũ và mới
      với kiểu dữ liệu primitive value (number,string,boolean) 
      Shallow compare*/
    //   shouldComponentUpdate(newProps,newState) {
    //     console.log('this.props',this.props)
    //     console.log('newProps',newProps)
    //     console.log('shouldComponentUpdate child')
    //     // return true;
    //     if (this.props.number === newProps.number) {
    //         return false
    //     }
    //     return true;
    // }

  render() {
      console.log('render child')
    return (
      <div>
        <h3>Child Component</h3>
        <p>Render props number:
           {this.props.objectNumber.number}
        </p>
      </div>
    )
  }

  componentDidMount() {
    console.log('componentDidmount child')
}

}
