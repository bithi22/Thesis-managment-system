import { FilePresent } from '@mui/icons-material'
import React, { PureComponent, useState } from 'react'
import './StudentFormDesign.css'


export default function Student() {
    
    return (
        <section>
        <div className="StudentForm">
            <div className="col-1">
            
              <h2>Student Information</h2>
            <span>Add and Update Student Information</span>

              
          
            <form id='formStudent' className='flex flex-col my-5'>

            <div className="row g-4">
  <div className="col">
    <input type="number" className="form-control" placeholder="Student-id" />
  </div>
  <div className="col">
    <input type="number" className="form-control" placeholder="Class-roll"/>
  </div>
</div>

           <div className="row g-4">
            <div className="col">
              <input type="text" className="form-control" placeholder='Session'/>
            </div>
            <div className="col">
                <input type="text" className="form-control" placeholder='Year'/>
                </div>
                </div>
                <div className="row g-4">
                  <div className="col">
                <input type="text" className="form-control" placeholder='Batch'/>
                </div>
                <div className="col">

<input type="text" className="form-control" placeholder='Semester'/>
</div>
                </div>



                <input name="name" className="form-control"type="text" placeholder='Name'/>
               
              


                 <input type="text" className="form-control" placeholder='email'  />
                <input type="text"  className="form-control" placeholder='Phone'/>


              




                <button className='btn' >Add Student</button>
                <button className='btn'> Update Student</button>

            </form>



            </div>
            

            </div>

          
        
    </section>
    )
  
}
