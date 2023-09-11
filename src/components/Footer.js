import React, { Component } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../style/Footer.css'

function Footer()  {
  
    return (
      <div className='Footer'>
        <div className='socialmedia'>
            <InstagramIcon />
            <FacebookIcon />
        </div>
        <p>&copy;2023 marouaallampizza.com</p>
      </div>
    )
  
}

export default Footer