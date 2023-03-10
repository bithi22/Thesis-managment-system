import { FilePresent } from '@mui/icons-material'
import React, { PureComponent, useState } from 'react'
import './StudentFormDesign.css'
import {useForm} from 'react-hook-form'
import Axios from 'axios'
import { confirm } from 'react-confirm-box'

export default function StudentForm() {

  
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  const handleSignup=(event)=>
  {
      console.log("Hello Worlds")
  }

  const addStudent= async (event)=>
  {
    if(student_id === "" || roll === "" || semester === 0 || batch <= 0 || year <=0 || session === "")
    {
        alert("Please insert necessary/valid data")
        return ;
    }
    const result = await confirm("Are you sure to add the student?")
    if(result)
    {
        console.log("Inside add students")
        Axios.post("http://localhost:3001/addStudent",{
            student_id: student_id,
            roll: roll,
            email: email,
            name:name,
            semester:semester,
            year: year,
            session:session,
            phone:phone,
            batch: batch,
        }).then((response)=>{
            console.log(response)
            alert(response.data)
        })
    }
      
  }

  const updateStudent = async (event)=>
  {
    if(student_id === "" || roll === "" || semester === 0 || batch <= 0 || year <1990 || session === "")
    {
        alert("Please insert necessary data")
        return ;
    }

    const result = await confirm(`Are you sure to update student_id ${student_id}?`)
    if(result)
    {    
      console.log("Inside Update Students")
      Axios.post("http://localhost:3001/updateStudent",{
            student_id: student_id,
            roll: roll,
            email: email,
            name:name,
            semester:semester,
            year: year,
            session:session,
            phone:phone,
            batch: batch,
        }).then((response)=>{
            console.log(response)
            alert(response.data)
        })
    }
  }

  
  const deleteStudent = async (event)=>
  {
    if(student_id === "")
    {
        alert("Student_id can't be empty")
        return ;
    }

    const result = await confirm(`Are you sure to delete student_id ${student_id}? All the thesis of his/her will be lost`)
    if(result)
    {    
      console.log("Inside delete Students")
      Axios.post("http://localhost:3001/deleteStudent",{
            student_id: student_id,
        }).then((response)=>{
            console.log(response)
            alert(response.data)
        })
    }
  }

  const [student_id,setStudent_id] = useState("")
  const [roll,setRoll] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [semester,setSemester] = useState(0)
  const [year,setYear] = useState(0)
  const [batch,setBatch] = useState(0)
  const [phone,setPhone] = useState(0)
  const [session,setSession] = useState("")
    
    return (
        <section>
        <div className="StudentForm">
            <div className="col-1">
            
              <h2>Student Information</h2>
            <span>Add and Update Student Information</span>

              
          
            <form id='formStudent' className='flex flex-col my-5' on onSubmit={handleSubmit(onSubmit)}>

            <div className="row g-4">
  <div className="col">
    <input  className="form-control"  placeholder="Student-id" onChange={(event)=> {
                    setStudent_id(event.target.value)
                }}/>
  </div>
  <div className="col">
    <input  className="form-control" placeholder="Class-roll" onChange={(event)=> {
                    setRoll(event.target.value)
                }}/>
  </div>
</div>

           <div className="row g-4">
            <div className="col">
              <input type="text" className="form-control" placeholder='Session' onChange={(event)=> {
                    setSession(event.target.value)
                }}/>
            </div>
            <div className="col">
                <input type="number" className="form-control" placeholder='Year' onChange={(event)=> {
                    setYear(event.target.value)
                }}/>
                </div>
                </div>
                <div className="row g-4">
                  <div className="col">
                <input type="number" className="form-control" placeholder='Batch' onChange={(event)=> {
                    setBatch(event.target.value)
                }}/>
                </div>
                <div className="col">

                <input type="number" className="form-control" placeholder='Semester'  onChange={(event)=> {
                    setSemester(event.target.value)
                }}/>
                </div>
                </div>



                <input name="name" className="form-control"type="text" placeholder='Name' onChange={(event)=> {
                    setName(event.target.value)
                }}/>
               
              


                 <input type="email" className="form-control" placeholder='email'  onChange={(event)=> {
                    setEmail(event.target.value)
                }}/>
                <input type="number"  className="form-control" placeholder='Phone' onChange={(event)=> {
                    setPhone(event.target.value)
                }}/>


              




                <button className='btn' onClick={addStudent}>Add Student</button>
                <button className='btn' onClick={updateStudent}> Update Student</button>
                <button className='btn' onClick={deleteStudent}> Delete Student</button>

            </form>



            </div>
            

            </div>

          
        
    </section>
    )
  
}
