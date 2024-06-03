import React from 'react'
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Contact1 from '../Bai2/Contact1'
import './home.css'
export default function Home1() {
  return (
    <>
        <h2 >Đây là trang chủ</h2> <br />

        <h3>Bài 6</h3>
        <div className='dasec'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        </div>
        <Outlet></Outlet>

        <h3>Bài 7</h3>
        <div className='dasec'>
        <NavLink className='item' to='/'>Home</NavLink>
        <NavLink className='item' to='/product'>Product</NavLink>
        <NavLink className='item' to='/detail'>Detail</NavLink>
        </div>
        <Outlet></Outlet>

        <h3>Bai 8</h3>
      <nav className='nav'>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/accout">accout</NavLink>
        <NavLink to="/product">Product</NavLink> 
      </nav>
      <div className='activec'><Outlet></Outlet></div>
    </>
  )
}
