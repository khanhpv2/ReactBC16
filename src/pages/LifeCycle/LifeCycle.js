import React, { Component } from 'react'
import Child from './Child';

export default class LifeCycle extends Component {
  constructor (props) {
    super(props);
    this.state = {
        number:1,
        like:1,
        objectNumber: {
            number:1
        }
    }
    console.log('constructor')
  }
  // hàm này dung để can thiệp vào quá trinh thay đổi  state và props trước khi render ra giao diện
  static getDerivedStateFromProps (newProps,currentState) {
    console.log('getDerivedStateFormProps');
    return currentState;
  }
  shouldComponentUpdate(newProps,newState) {
    console.log('shouldComponentUpdate')
    return true;
}  
  render() {
    console.log('render')
    return (
      <div className='container'>
          <h3 >Parent Component</h3>
          <p>
              Numer: {this.state.number}
          </p>
          <button className='btn btn-primary mr-2' onClick={()=>{
              this.setState({
                  number:this.state.number +1
              })
          }}>+</button>
         <button className='btn btn-primary ml-2' onClick={()=>{
              this.setState({
                  number:this.state.number -1
              })
          }}>-</button>

          <hr />

          <p>
              Numer: {this.state.like}
          </p>
          <button className='btn btn-primary mr-2' onClick={()=>{
              this.setState({
                  like:this.state.like +1
              })
          }}>+</button>
         <button className='btn btn-primary ml-2' onClick={()=>{
              this.setState({
                  like:this.state.like -1
              })
          }}>-</button>

            <hr />

            <p>
                Object number: {this.state.objectNumber.number}
            </p>
            <button className='btn btn-primary mr-2' onClick={()=>{
                let newNumber = {...this.state.objectNumber};
                console.log('newnumberobject cộng',newNumber)
                newNumber.number +=1
                this.setState({
                    objectNumber:newNumber
                })
            }}>+</button>
            <button className='btn btn-primary ml-2' onClick={()=>{
                let newNumber = {...this.state.objectNumber};
                newNumber.number -=1
                this.setState({
                    objectNumber:newNumber
                })
            }}>-</button>

          
          <div className='bg-dark text-white p-3'>
              <Child objectNumber={this.state.objectNumber} />
          </div>
      </div>
    )
  }
  timeOut = {} 
  componentDidMount() {
      console.log('componentDidmount')
      this.timeOut = setInterval (() => {
        console.log('call api 2s gọi 1 lân')
      },2000)
  }


  componentWillUnmount () {
      // hàm này để clear các hàm chạy ngầm của component trước khi component mất khỏi giao diện
      clearInterval (this.timeOut)
  }


}
