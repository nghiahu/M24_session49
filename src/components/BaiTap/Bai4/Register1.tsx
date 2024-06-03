import React from 'react'
import './register.css'
export default function Register1() {
  return (
    <div className='register'>
    <h3 className='title'>Create account</h3>
        <div className='InpEmail'>
        <label htmlFor="">Your email</label>
        <input type="text" /> 
        </div>
        <div className='InpPass'>
        <label htmlFor="">Password</label>
        <input type="text" /> 
        </div>
        <div className='InpPass'>
        <label htmlFor="">Confrim Password</label>
        <input type="text" /> 
        </div>
        <button className='bnt'>Create an accout</button>
        <p className='pant'>Already have an acout?<div>Login here</div></p>
    </div>
  )
}
