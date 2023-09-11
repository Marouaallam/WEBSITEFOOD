import React from 'react'
import {Link} from 'react-router-dom'
import pic from '../assets/pizzaa.jpg'
import '../style/Home.css'

function Home() {
  return (
    <div className='Home' style={{backgroundImage:`url(${pic})`}}>
     <div className='headercontainer' >
      <h1>Maroua's pizza</h1>
      <p>pizza that fit every taste</p>
      <Link to="/menu">
       <button>Make your order</button>
      </Link>
     </div>
    </div>
  )
}

export default Home