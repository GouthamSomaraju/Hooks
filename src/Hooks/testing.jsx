import React, { useState } from 'react'
import UseEffect from './UseEffect'

const Testing = () => {
    let [show,setShow]=useState(true)
  return (
    <div>
      
      {show?<UseEffect />:<h1>Component Unmounted</h1>}
      <button onClick={()=>{setShow(false)}}>{show?"Unmount":"Mount"}</button>
    </div>
  )
}

export default Testing
