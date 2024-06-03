import React from 'react'
import './login.css'
export default function Login1() {
  return (
    <div className='login'>
        <h3 className='title'>Login account</h3>
        <div className='InpEmail'>
        <label htmlFor="">Your email</label>
        <input type="text" /> 
        </div>
        <div className='InpPass'>
        <label htmlFor="">Password</label>
        <input type="text" /> 
        </div>
        <button className='bnt'>Login an accout</button>
        <p className='pant'>Already have an acout?<div>Register here</div></p>
    </div>
  )
}
