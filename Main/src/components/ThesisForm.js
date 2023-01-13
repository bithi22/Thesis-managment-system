import { FilePresent } from '@mui/icons-material'
import React, { PureComponent, useState } from 'react'
import './StudentFormDesign.css'


export default function ThesisForm() {
    
    return (
        <section>
        <div className="ThesisForm">
            <div className="col-1">
            
              <h2>Upload Thesis</h2>
            <span>Add information and save your thesis</span>

              
          
            <form class="row g-3 my-5" id="formThesis">
            <div class="col-auto">

                
    <input type="text" class="form-control" placeholder="Thesis-id" />
  </div>
  <div class="col-auto">
  <input type="text" class="form-control" placeholder="Category"/>
  </div>
  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Course-id"/>
  </div>

  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Author-1" />
  </div>
  <div class="col-auto">
  <input type="text" class="form-control" placeholder="Author-2"/>
  </div>
  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Author-3"/>
  </div>

  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Supervisor-1" />
  </div>
  <div class="col-auto">
  <input type="text" class="form-control" placeholder="Supervisor-2"/>
  </div>
  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Supervisor-3"/>
  </div>
  <div class="col-12">
    <input type="text" class="form-control my-2"  placeholder="Title"/>
  </div>
  <div class="col-12">
    <input type="text" class="form-control"  placeholder="Upload pdf"/>
  </div>
  <div class="col-auto">
    <input type="email" class="form-control my-2" placeholder="Publication Year"/>
  </div>
  <div class="col-auto">
  

    <input type="text" class="form-control my-2" placeholder="Date of Submission"/>
  </div>
  <div class="col-md-6">
    <input type="text" class="form-control my-2" placeholder="Type"/>
  </div>
  <div class="col-md-6">
    <input type="text" class="form-control my-2" placeholder="Publication"/>
  </div>

  

 

  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Keywords" />
  </div>
  <div class="col-auto">
  <input type="text" class="form-control" placeholder="Keywords"/>
  </div>
  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Keywords"/>
  </div>
  
  
 
  <div class="col-12">
    <button type="submit" className="btn btn-primary">Upload</button>
  </div>
</form>



            </div>
            

            </div>

          
        
    </section>
    )
  
}
