import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  let [name,setNam] = useState<string>('')
  let [pass,setPass] = useState<string>('')
  const navigate = useNavigate()
  const handleChangeName=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setNam(e.target.value)
  }
  const handleChangePass=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setPass(e.target.value)
  }
  const register=()=>{
      //lấy giá trị người dùng nhập
      //Xử lý những các tác vụ
    const user={
      name: name,
      pass:pass
    }
      navigate('/login',{state:user})
  }
  return (
    <div>Register <br />
      <label htmlFor="">Email</label> 
      <input type="text" onChange={handleChangeName}/> <br />
      <label htmlFor="">Pass</label>
      <input type="text" onChange={handleChangePass}/> <br />
      <button onClick={register}>Register</button>
    </div>
  )
}
