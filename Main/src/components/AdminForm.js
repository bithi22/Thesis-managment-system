import { FilePresent } from '@mui/icons-material'
import React, { PureComponent, useState } from 'react'
import './StudentFormDesign.css'


export default function AdminForm() {
    
    return (
        <section>
        <div className="AdminForm">
            <div className="col-1">
            
              <h2>Add a new Admin</h2>

              
          
            <form class="row g-3 my-5" id="formAdmin">
            <div class="col-auto">

                
    <input type="text" class="form-control" placeholder="Admin-id" />
  </div>
 
  

  

  
  <div class="col-12">
    <input type="text" class="form-control my-2"  placeholder="Name"/>
  </div>
 
  <div class="col-auto">
    <input type="email" class="form-control my-2" placeholder="Designation"/>
  </div>
 
  

  <div class="col-8">
    <input type="email" class="form-control my-2" placeholder="Username"/>
  </div>
  <div class="col-auto">
    <input type="email" class="form-control my-2" placeholder="Password"/>
  </div>
 

 

  
  
 <div class="row g-3">
  <div class="col-3">
    <button type="submit" className="btn btn-primary"> Add</button>
  </div>
  <div class="col-3">
    <button type="submit" className="btn btn-primary">Update</button>
  </div>
  <div class="col-3">
    <button type="submit" className="btn btn-primary">Delete</button>
  </div>
  </div>
</form>



            </div>
            

            </div>

          
        
    </section>
    )
  
}
