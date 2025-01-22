import React, { useContext } from 'react'
import './NavBar.css'
import {Route,Routes,NavLink} from 'react-router-dom'
import Contact from './Contact'
import Product from './Product'
import Home from './Home'
import { ThemeContext } from './ThemeContext'
import light from '../light.svg'
import dark from '../dark.svg'

function NavBar() {
  let {theme,setTheme}=useContext(ThemeContext);
  let obj={}
  if(theme=='dark'){
      obj={
        backgroundColor:"black",
        color:'white'
      }
  }
  else{
    obj={
      backgroundColor:"white",
      color:"black"
    }
  }
  return (
    <div style={obj}>
      <nav>
    

       <div id='div1'>
       {/* <a href='#'>Home</a>
        <a href='#'>Contact</a>
        <a href='#'>Product</a> */}

        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/product'>Product</NavLink>
        {
        theme=='dark' ? <img src={light} onClick={()=>{setTheme("light")}}></img>:<img src={dark} onClick={()=>{setTheme("dark")}}></img>
      }
       </div>

      </nav>    

    <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        </Routes>
    </div>
  )
}

export default NavBar
