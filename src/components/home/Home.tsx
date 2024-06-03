import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './home.css'
export default function home() {
  return (
    <div>
        <nav>
            {/* <a href="/about">about</a> <br />
            <a href="/news">news</a> <br />
            <a href="/contact">contact</a> */}

            {/* <Link to="/about">about</Link> <br />
            <Link to="/news">news</Link> <br />
            <Link to="/contact">contact</Link> */}
            {/* sinh ra thêm navLink */}
            <NavLink to="/about">about</NavLink> <br />
            <NavLink to="/news">news</NavLink> <br />
            <NavLink to="/contact">contact</NavLink>
        </nav>
        <Outlet></Outlet>
    </div>
  )
}
