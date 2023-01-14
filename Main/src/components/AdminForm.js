import React, { PureComponent, useState } from 'react'
import './StudentFormDesign.css'
import {useForm} from 'react-hook-form'
import { confirm } from 'react-confirm-box'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'



export default function AdminForm() {
    
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  const handleSignup=(event)=>
  {
      console.log("Hello Worlds")
  }

  let navigate = useNavigate();

  const [admin_id,setAdmin_id] = useState("")
  const [name,setName] = useState("")
  const [designation,setDesignation] = useState("")
  const [email,setEmail] = useState("")
  const [previousUsername,setPreviousUsername] = useState("")
  const [updatedUsername,setUpdatedUsername] = useState("")
  const [password,setPassword] = useState("")
  const [updatedPassword,setUpdatedPassword] = useState("")

  const addAdmin = async ()=>{
    const result = await confirm("Are you sure to add a new admin?")
    if(result)
    {
      if(admin_id==="" || designation==="" || email==="" || name===""||previousUsername===""||password==="")
      {
          alert("Please fill out require data")
          return ;
      }
      Axios.post("http://localhost:3001/addAdmin",{
        admin_id: admin_id,
        designation: designation,
        email: email,
        name:name,
        password: password,
        username: previousUsername,
    }).then((response)=>{
        console.log(response)
        if(response.data===true)
        {
            alert("Admin added successfully")
        }
        else
        {
            alert(response.data)
        }
    })
    }
  }

  
  const updateAdmin = async ()=>{
    const result = await confirm("Are you sure to update your account?")
    if(result)
    {
      if(admin_id==="" || designation==="" || email==="" || name===""||previousUsername===""
              ||password==="" || updatedPassword==="" || updatedUsername==="")
      {
          alert("Please fill out require data")
          return ;
      }
      Axios.post("http://localhost:3001/updateAdmin",{
        admin_id: admin_id,
        designation: designation,
        email: email,
        name:name,
        previousPassword: password,
        previousUsername: previousUsername,
        updatedUsername: updatedUsername,
        updatedPassword: updatedPassword
    }).then((response)=>{
        console.log(response)
        if(response.data===true)
        {
            alert("Your account has been updated successfully")
        }
        else
        {
            alert(response.data)
        }
    })
    }
  }

  const deleteAdmin = async ()=>{
    const result = await confirm("Are you sure to delete your account?")
    if(result)
    {
      if(previousUsername === "" || password === "")
      {
        alert("Please enter your username and password")
        return ;
      }
      Axios.post("http://localhost:3001/deleteAdmin",{
        password: password,
        username: previousUsername,
    }).then((response)=>{
        console.log(response)
        if(response.data===true)
        {
            alert("Your account has been deleted successfully")
            navigate('/');
        }
        else
        {
            alert(response.data)
        }
    })
    }
  }

    return (
        <section>
        <div className="AdminForm">
            <div className="col-1">
            
              <h2>Add a new Admin</h2>

                      
            <form class="row g-3 my-5" id="formAdmin" on onSubmit={handleSubmit(onSubmit)}>
            <div class="col-auto">

                
    <input type="text" class="form-control" placeholder="Admin-id" onChange={(event)=> {
                    setAdmin_id(event.target.value)
                }}/>
    
  </div>
 
  

  

  
  <div class="col-12">
    <input type="text" class="form-control my-2"  placeholder="Name" onChange={(event)=> {
                    setName(event.target.value)
                }}/>
  </div>
 
  <div class="col-auto">
    <input type="text" class="form-control my-2" placeholder="Designation" onChange={(event)=> {
                    setDesignation(event.target.value)
                }}/>
  </div>
 
  

  <div class="col-8">
    <input type="text" class="form-control my-2" placeholder="Previous/New Username" onChange={(event)=> {
                    setPreviousUsername(event.target.value)
                }}/>
  </div>

  
  <div class="col-8">
    <input type="text" class="form-control my-2" placeholder="Updated Username" onChange={(event)=> {
                    setUpdatedUsername(event.target.value)
                }}/>
  </div>

  <div class="col-auto">
    <input type="password" class="form-control my-2" placeholder="Previous/New Password" onChange={(event)=> {
                    setPassword(event.target.value)
                }}/>
  </div>

  
  <div class="col-auto">
    <input type="password" class="form-control my-2" placeholder="Updated Password" onChange={(event)=> {
                    setUpdatedPassword(event.target.value)
                }}/>
  </div>
  
  <div class="col-auto">
    <input type="email" class="form-control my-2" placeholder="Email" onChange={(event)=> {
                    setEmail(event.target.value)
                }}/>
  </div>
 

 

  
  
 <div class="row g-3"> 
  <div class="col-3">
    <button type="submit" className="btn btn-primary" onClick={addAdmin}> Add</button>
  </div>
  <div class="col-3">
    <button type="submit" className="btn btn-primary" onClick={updateAdmin}>Update</button>
  </div>
  <div class="col-3">
    <button type="submit" className="btn btn-primary" onClick={deleteAdmin}>Delete</button>
  </div>
  </div>
</form>



            </div>
            

            </div>

          
        
    </section>
    )
  
}
