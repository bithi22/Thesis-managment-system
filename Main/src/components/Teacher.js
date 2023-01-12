import { FilePresent } from '@mui/icons-material'
import React, { PureComponent, useState } from 'react'
import './StudentFormDesign.css'


export default function Teacher() {
    
    return (
        <section>
        <div className="StudentForm">
            <div className="col-1">
            
              <h2>Teacher Information</h2>
            <span>Add and Update Teacher Information</span>

              
          
            <form id='formStudent' className='flex flex-col my-5'>

          

            <input type="number" placeholder='Teacher id'/>


                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Designation'/>
                <input type="text" placeholder='Date of Joining'/>
                <input type="number" placeholder='Salary'/>



               





                <input type="email" placeholder='email'  />
                <input type="text" placeholder='Phone'/>




                <button className='btn' >Add Teacher</button>
                <button className='btn'> Update Teacher</button>

            </form>



            </div>
            

            </div>

          
        
    </section>
    )
  
}
