import React from 'react'
import './ImageStyle.css'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

const Image = () => {
  return (
    <div className='hero'>
    <img src={logo} alt="logo"/>
    
       
    
        <div className='content' >
            <h1>Welcome to CSEDU Online Thesis Archive</h1>
            <p>
                Upload Your Thesis and Access Them Easily
            </p>
        
        </div>
        </div>
        
    
      

  )
}

export default Image
