import React from 'react'
import FooterStyle from './FooterStyle.css'
import {FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container' style={{color:'white'}}>
            <div className='left' >
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                
                
                   <p>Science Complex Building</p> 
                   <h4>University of Dhaka, Dhaka-1000</h4>
                   </div>
        
                   <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                        +8801721595938
                    </h4>

                   </div>
                   <div className='Email'>
                    <h4>
                        <FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>

                      shahanazsharmin66@gmail.com
                    </h4>

                   </div>
            
            
            </div>
            <div className='right'>
                <h4>
                    About CSEDU
                </h4>
                <p>
                    Department of Computer Science and Engineering is the highest echelon of technology and academics
                </p>
                
            </div>
        </div>
      
    </div>
  )
}

export default Footer
