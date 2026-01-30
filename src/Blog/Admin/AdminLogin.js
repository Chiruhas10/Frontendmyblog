import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [details, setDetails] = useState({email:"", password:""})
  const navigate = useNavigate()
  const changeDetails = (e)=>{
    const {name, value} = e.target
    setDetails({...details, [name]:value})
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    const {email, password} = details
    if(email === 'admin@blog.com' && password === 'admin')
      {
      alert("Login Successful")
      navigate('/dashboard')
    }
    else{
      alert("Invalid Credentials")
    }
  }
  return (
    <div className='container p-5'>
        <div className='text-center col-lg-6 mb-4 mx-auto p-5 shadow-lg'>
      <h1 className=' display-6 fw-bold mb-3'>Admin Login</h1>
      <form onSubmit={submitHandler}>
        <input type='email' placeholder='Email Address' name='email' onChange={changeDetails} className='form-control mb-3' />
        <input type='password' placeholder='Password' name='password' onChange={changeDetails} className='form-control mb-3' />
        <button className='btn btn-primary mt-3' type='submit'> Login</button>
      </form>
      </div>
     
    </div>
  )
}


export default AdminLogin
