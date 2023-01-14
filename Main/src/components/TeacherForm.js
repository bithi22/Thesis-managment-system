import { FilePresent } from '@mui/icons-material'
import React, { PureComponent, useState } from 'react'
import './StudentFormDesign.css'
import {useForm} from 'react-hook-form'
import Axios from 'axios'
import { confirm } from 'react-confirm-box'

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
  const [specialization1,setSpecialization1] = useState("")
  const [specialization2,setSpecialization2] = useState("")
  const [specialization3,setSpecialization3] = useState("")
  

  const addTeacher = async (event) =>{
    if(teacher_id === "" || designation === "" || email === "" || name === "" || phone === ""
         || salary === "" || date_of_joining === "")
    {
        alert("Please insert all the data")
        return ;
    }
    const result = await confirm("Are you sure to add a new teacher?")
    if(result)
    {
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
            if(response.data === true)
            {
                addSpecialization1();
            }
            else
            {
                alert(response.data)
            }
        })
    }
  }

  const addSpecialization1= ()=>{
    console.log("Inside add specialization 1 ")
    if(specialization1 === "")
    {
        addSpecialization2();
    }
      Axios.post("http://localhost:3001/addSpecialization",{
            teacher_id: teacher_id,
            specialization: specialization1,
        }).then((response)=>{
            console.log(response)
            if(response.data === true)
            {
                addSpecialization2();
            }
            else
            {
                alert(response.data)
            }
        })
  }

  
  const addSpecialization2= ()=>{
    console.log("Inside add specialization 2 ")
    if(specialization2 === "")
    {
        addSpecialization3();
    }
      Axios.post("http://localhost:3001/addSpecialization",{
            teacher_id: teacher_id,
            specialization: specialization2,
        }).then((response)=>{
            console.log(response)
            if(response.data === true)
            {
                addSpecialization3();
            }
            else
            {
                alert(response.data)
            }
        })
  }

  
  const addSpecialization3 = ()=>{
    console.log("Inside add specialization 3 ")
    if(specialization3 === "")
    {
        alert("Teacher added successfully")
        return ;
    }
      Axios.post("http://localhost:3001/addSpecialization",{
            teacher_id: teacher_id,
            specialization: specialization3,
        }).then((response)=>{
            console.log(response)
            if(response.data === true)
            {
                alert("Teacher added successfully")
            }
            else
            {
                alert(response.data)
            }
        })
  }

  const updateTeacher = async () =>{
    if(teacher_id === "" || designation === "" || email === "" || name === "" || phone === ""
         || salary === "" || date_of_joining === "")
    {
        alert("Please insert all the data")
        return ;
    }

    const result = await confirm(`Are you sure to update teacher_id ${teacher_id} ?`)
    if(result)
    {
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
  }

  const deleteTeacher = async() =>{
    if(teacher_id === "")
    {
        alert("Teacher_id can't be empty")
        return ;
    }
    const result = await confirm(`Are you sure to update teacher_id ${teacher_id} ? Thesis supervised him/her will be lost.`);
    if(result)
    {
        console.log("Inside delete teacher")
        Axios.post("http://localhost:3001/deleteTeacher",{
            teacher_id: teacher_id
        }).then((response)=>{
            console.log(response)
            if(response.data === true)
            {
                alert("Teacher deleted successfully")
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

                

                <input type="text" placeholder='Specialization' onChange={(event)=> {
                    setSpecialization1(event.target.value)
                }}/>
                   <input type="text" placeholder='Specialization' onChange={(event)=> {
                    setSpecialization2(event.target.value)
                }}/>
                   <input type="text" placeholder='Specialization' onChange={(event)=> {
                    setSpecialization3(event.target.value)
                }}/>

                <button className='btn' onClick={addTeacher}>Add Teacher</button>
                <button className='btn' onClick={updateTeacher}> Update Teacher</button>
                <button className='btn' onClick={deleteTeacher}> Delete Teacher</button>

            </form>



            </div>
            

            </div>

          
        
    </section>
    )
  
}
