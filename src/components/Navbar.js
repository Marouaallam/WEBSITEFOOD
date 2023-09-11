import React,{useState} from 'react'
import logo from "../assets/logo.svg"
import {Link} from "react-router-dom"
import '../style/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openlinks,setOpenlinks]=useState(false)

  const toggleNabbar=()=>{
   setOpenlinks(!openlinks)
  }
  return (
    <div className='navbar'>
       <div className='leftbar' id={openlinks?"open":"close"}>
        <img src={logo}/>
        <div className='hiddenbar'>
         <Link to="/">Home</Link>
         <Link to="/menu">Menu</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
       </div>
       </div>
       
       <div className='rightbar'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNabbar}>
          <ReorderIcon />
        </button>

       </div>

    </div>
  )
}

export default Navbar