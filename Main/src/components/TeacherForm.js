import { FilePresent } from '@mui/icons-material'
import React, { PureComponent, useState } from 'react'
import './StudentFormDesign.css'
import {useForm} from 'react-hook-form'
import Axios from 'axios'


export default function TeacherForm() {
    
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  const handleSignup=(event)=>
  {
      console.log("Hello Worlds")
  }

  
  const [teacher_id,setTeacher_id] = useState("")
  const [name,setName] = useState("")
  const [designation,setDesignation] = useState("")
  const [email,setEmail] = useState("")
  const [salary,setSalary] = useState(1)
  const [date_of_joining,setDate_of_joining] = useState("")
  const [phone,setPhone] = useState(1)

  const addTeacher = () =>{
    console.log("Inside add teacher")
      Axios.post("http://localhost:3001/addTeacher",{
            teacher_id: teacher_id,
            designation: designation,
            email: email,
            name:name,
            phone:phone,
            salary: salary,
            date_of_joining:date_of_joining,
        }).then((response)=>{
            console.log(response)
            alert(response.data)
        })
  }

  const updateTeacher = () =>{
    console.log("Inside update teacher")
      Axios.post("http://localhost:3001/updateTeacher",{
            teacher_id: teacher_id,
            designation: designation,
            email: email,
            name:name,
            phone:phone,
            salary: salary,
            date_of_joining:date_of_joining,
        }).then((response)=>{
            console.log(response)
            alert(response.data)
        })
  }


    return (
        <section>
        <div className="StudentForm">
            <div className="col-1">
            
              <h2>Teacher Information</h2>
            <span>Add and Update Teacher Information</span>
          
            <form id='formStudent' className='flex flex-col my-5'  on onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder='Teacher id' onChange={(event)=> {
                    setTeacher_id(event.target.value)
                }}/>
                <input type="text" placeholder='Name' onChange={(event)=> {
                    setName(event.target.value)
                }}/>
                <input type="text" placeholder='Designation' onChange={(event)=> {
                    setDesignation(event.target.value)
                }}/>
                <input type="date" placeholder='Date of Joining' onChange={(event)=> {
                    setDate_of_joining(event.target.value)
                }}/>
                <input type="number" placeholder='Salary' onChange={(event)=> {
                    setSalary(event.target.value)
                }}/>
                <input type="text" placeholder='email'  onChange={(event)=> {
                    setEmail(event.target.value)
                }}/>
                <input type="number" placeholder='Phone' onChange={(event)=> {
                    setPhone(event.target.value)
                }}/>

                <button className='btn' onClick={addTeacher}>Add Teacher</button>
                <button className='btn' onClick={updateTeacher}> Update Teacher</button>

            </form>



            </div>
            

            </div>

          
        
    </section>
    )
  
}
