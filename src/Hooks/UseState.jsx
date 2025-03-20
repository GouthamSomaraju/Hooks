// import '../App.css';
import React, { useState } from 'react'

const UseState = () => {

    let [value,setValue]=useState(0)
    let increment=()=>{
        setValue(value+1)
    }
    // let [arr,setArr]=useState(['Hi','Hello','Hey'])
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseState
