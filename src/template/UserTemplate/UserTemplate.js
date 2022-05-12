import React, { Fragment } from 'react'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import HeaderHome from '../../Component/HeaderHome/HeaderHome'

export default function UserTemplate(props) {
  return (
    <Route path={props.path} render={(propsRoute)=>{

        return <Fragment>
        <HeaderHome />
        <div className='d-flex justity-content-center align-items-center'>
            <div className='w-50'>
                <img src="https://picsum.photos/2000" alt="..." style={{height:'100vh'}} />
            </div>
            <div className="w-50 content1">
                <props.component {...propsRoute} />
            </div>
        </div>
        </Fragment>
    }} />
  )
}
