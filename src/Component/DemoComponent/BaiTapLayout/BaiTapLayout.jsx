

import React, { Component } from 'react'
import BTContent from './BTContent'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTNavgation from './BTNavgation'

export default class BaiTapLayout extends Component {
  render() {
    return (
     <section>
         <div>Bài tập layout</div>
         <BTHeader />
         <div className='d-flex'>
            <div className="w-25 h-100">
                <BTNavgation />
            </div>
            <div className="w-75 h-100">
                <BTContent />
            </div>
         </div>
         <div>
            <BTFooter />
        </div>
     </section>
    )
  }
}
