import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    // let [login,setLogin]=useState(false)
    let [name,setName]=useState('')
    let [password,setPassword]=useState('')
    let navigate=useNavigate()

    useEffect(()=>{
        if(name==='admin' && password==='admin'){
            navigate('/home')
        }
    },[name, password,navigate])

    let handleChange=(e)=>{
        e.preventDefault()
        if(e.target.id==='name'){
            setName(e.target.value)
        }
        if(e.target.id==='password'){
            setPassword(e.target.value)
        }
    }

  return (
    <div>
        <h2>Login</h2><hr />
        <input type="text" name='name' id='name' onChange={handleChange} placeholder='Username'/><br /> <br />
        <input type="text" name='password' id='password' onChange={handleChange} placeholder='Password'/><br />
      
    </div>
  )
}

export default Login
