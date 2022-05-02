import React, {memo} from 'react'

function ChildComponent(props) {
    console.log('child component')
  return (
    <div className='bg-success p-5'>
        Child Component
        <h3>Number: {props.renderNumber()}</h3>
    </div>
  )
}
// memo: giong sallow compare (string,boolean,number)
export default memo(ChildComponent)
