import React, { Component } from 'react'

export default class ExThayDoiFontChu extends Component {
   state = {
       fSize:50 // state là fontsize
   }
  handleChangeFontSize = (number) => {
      this.setState({
          fSize: this.state.fSize + number
      })
  }
  render() {
    return (
      <div className='container'>
          <h3>Bài tập thay đổi font chữ</h3>
          <p style={{fontSize:`${this.state.fSize}px`}}>
              Học lập trình front end tại cybersoft thật cool !
          </p>
          <button className='btn btn-primary' onClick={() =>{
              this.handleChangeFontSize(5);
          }}>+</button>
          <button className='btn btn-primary ml-2' onClick={() =>{
              let newFsize = this.state.fSize -5;
              // xử lý setState
              this.setState ({
                  fSize: newFsize
              })

          }}>-</button>
      </div>
    )
  }
}
