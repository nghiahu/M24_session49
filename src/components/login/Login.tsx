import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Login() {
  // dùng hook userLocation của react-router-dom cung cấp
  const locaction = useLocation()
  console.log(locaction);
  
  return (
    <div>login <br />
    <label htmlFor="">Email</label>
    <input type="text" /> <br />
    <label htmlFor="">Pass</label>
    <input type="text" />
    <button>Login</button>
    </div>
  )
}
