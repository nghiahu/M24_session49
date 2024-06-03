import { Link, NavLink, Navigation, Route, Routes } from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Notfound from './components/Notfound'
import About from './components/about/About'
import News from './components/news/News'
import Contact from './components/contact/Contact'
import Home1 from './components/BaiTap/Bai1/Home1'
import Contact1 from './components/BaiTap/Bai2/Contact1'
import Login1 from './components/BaiTap/Bai3/Login1'
import Register1 from './components/BaiTap/Bai4/Register1'
import Notfound1 from './components/BaiTap/Bai5/Notfound1'
import Home6 from './components/BaiTap/Bai6/Home6'
import About6 from './components/BaiTap/Bai6/About6'
import Home7 from './components/BaiTap/Bai7/Home7'
import Detail from './components/BaiTap/Bai7/Detail'
import Product7 from './components/BaiTap/Bai7/Product7'
import Account from './components/BaiTap/Bai8/Account'
import Admin from './components/BaiTap/Bai8/Admin'
import Product from './components/BaiTap/Bai8/Product'
import HomePage from './components/BaiTap/Bai9/HomePage'
import ListUser from './components/BaiTap/Bai10/ListUser '
export default function App() {
  
  return (
    <div>
      {/* 
      Là một thư viện.
      tạo một bộ định tuyến cho trang wed của mình tức là nó sẽ cho phép
      react element được hiển thị ứng với các đường dẫn url
      Cách dùng:
      cài đặt: npm i react-router-dom
      dùng component browser-Router để cung cấp bộ định tuyến cho toàn app.
       */}
       {/* <Routes>
          <Route path='/' element={<Home></Home>}>
            <Route index element={<About></About>}></Route>
            <Route path='/news' element={<News></News>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
       </Routes> */}
          <Routes>
          <Route path='' element={<Home1/>}>
            <Route path='/' element={<Home6/>}></Route>
            <Route path='/about' element={<About6/>}></Route>

            <Route path='/' element={<Home7/>}></Route>
            <Route path='/product' element={<Product7/>}></Route>
            <Route path='/detail' element={<Detail/>}></Route>

            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/accout' element={<Account/>}></Route>
            <Route path='/product' element={<Product/>}></Route>

          </Route>
          <Route path='/contact' element={<Contact1/>}></Route>
          <Route path='/login' element={<Login1/>}></Route>
          <Route path='/register' element={<Register1/>}></Route>
          <Route path='*'element={<Notfound1/>}></Route>
          <Route path='/home-page' element={<HomePage/>}></Route>
       </Routes>
       <ListUser></ListUser>
    </div>
  )
}
