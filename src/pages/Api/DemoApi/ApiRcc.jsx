import React, { Component } from "react";
import axios from 'axios'

export default class ApiRcc extends Component {

  state = {
      arrTask: []
  }
  
  getAllTaskApi = async() => {
    // Cách 1: call api dung promise
    {
    //   // gọi api băng axios khi người dùng click vào nut get all task
    //   let promise = axios({
    //       url:'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
    //       method:'GET'
    //   });
    //   // xử lý thành công
    //   //promise.then là hàm bât đồng bộ (trong khi nó xử lý hàm bên ngoài van tiếp tục chay)
    //   promise.then((result)=>{
    //       console.table(result.data);
    //       this.setState({
    //           arrTask: result.data
    //       })
    //   })
    //   //xử lý thất bại
    //   promise.catch((errors)=>{
    //       console.log({errors})
    //   })
    }
    

    // cách 2: Dung asynce await (es7)
    try {
    let result =await axios ({
        url:'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
        method:'GET'       
    });
    console.log(result.data)
    // sau khi đợi api trả về kết quả thì gán vào state
    this.setState({
        arrTask: result.data
    })
    console.log('oke')  
    } catch (errors) {
    console.log({errors});
    }
  }

  componentDidMount () {
      // gọi api sau khi giao diện load xong
      this.getAllTaskApi();
      // setInteval (()=>{
      //  this.getAllTaskApi();    
      //},5000)
  }  
  render() {
    return (
      <div className="container">
        <button className="btn btn-success" onClick={()=>{
            this.getAllTaskApi();
        }}>Get all task</button>
        <h3 className="text-center display-4 ">To do App</h3>
        <div className="d-flex justify-content-center">
          <table className="table text-center w-50">
            <tbody>

              {this.state.arrTask.filter(task => task.status === false).map(({taskName,status},index)=>{ //task = {status:false,taskName:'task}
                  return <tr key={index}>
                  <td>{taskName}</td>
                  <td>
                  <i className="badge badge-danger">Incomplete</i>
                  <i className="fa fa-check ml-2" style={{fontSize:'25',cursor:'pointer',color:'green'}}></i>
                  </td>
                </tr>
              })}  
              {/* <tr>
                <td>Task 1</td>
                <td>
                <i className="badge badge-danger">Incomplete</i>
                <i className="fa fa-check ml-2" style={{fontSize:'25',cursor:'pointer',color:'green'}}></i>
                </td>
              </tr>
              <tr>
                <td>Task 2</td>
                <td>
                <i className="badge badge-success">complete</i>
                </td>
              </tr> */}
            </tbody>
            <tfoot>
            {this.state.arrTask.filter(task => task.status === true).map(({taskName,status},index)=>{ //task = {status:false,taskName:'task}
                  return <tr key={index}>
                  <td>{taskName}</td>
                  <td>
                  <i className="badge badge-success">Complete</i>
                  </td>
                </tr>
              })}  
            </tfoot>
           
          </table>
        </div>
      </div>
    );
  }
}
