import React, { useRef } from 'react'
import {connect,useSelector,useDispatch} from 'react-redux'
export default function FakeBookApp(props) {

  //useSelector dung de lay du lieu state tu redux ve component
  const arrComment = useSelector(rootReducer => rootReducer.fakeBookAppReducer.arrComment)
  // gui du lieu len redux
  const dispatch = useDispatch();  

  const userCommentRef = useRef({name:'',content:''});
  const handleChange = (e)=> {
    let {value,id} = e.target
    userCommentRef.current[id] = value
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('user comment',userCommentRef.current)

      const action = {
          type:'ADD_COMMENT',
          userComment:userCommentRef.current
      }
      // dua du lieu len redux
      dispatch(action);
  }
  console.log('arrComment',arrComment)

  return (
    <div className='container' >
        <h3>FakeBook App</h3>
        <div className="card">
            <div className="card-header" >
                {arrComment.map((userComment,index)=>{
                   return <div className="row" key={index}>
                    <div className="col-2">
                        <img src={`https://i.pravatar.cc?u=${userComment.name}`} width={50} height={50} alt="" />
                    </div>
                    <div className="col-10">
                        <p className='text-danger font-weight-bold'>{userComment.name}</p>
                        <p>{userComment.content}</p>
                    </div>
                </div>
                })}
            </div>
            <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <p>Name</p>
                        <input type="text" className='form-group' id='name' name='name' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <p>Content</p>
                        <input type="text" className='form-group' id='content' name='content' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-success'>Submit</button>
                    </div>
            </form>
            
        </div>
    </div>
  )
}
