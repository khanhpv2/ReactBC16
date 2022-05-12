import React from 'react'
import { Route } from 'react-router-dom'
import HeaderHome from '../../Component/HeaderHome/HeaderHome'
import Home from '../../pages/Home/Home'

export default function HomeTemplate(props) {
  return (
     <Route exact path={props.path} render={(propsRoute)=>{ //{path:'/home', component:Home}
         return <div>
            <HeaderHome />
            {/* <Home {...propsRoute} /> */}
            <props.component {...propsRoute} />
            <footer className='text-center p-5 bg-dark text-white'>Footer @Cybersoft</footer>
         </div>
     }}
     />
  )
}
