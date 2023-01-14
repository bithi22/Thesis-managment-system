import React, { PureComponent, useState } from 'react'
import FormStyle from './FormStyle.css'
import signup from '../assets/signup.webp'
import {useForm} from 'react-hook-form'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'



export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    const handleSignup=(event)=>
    {
        console.log("Hello Worlds")
    }

    let navigate = useNavigate();

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const userSignup = (event) =>{
        console.log("Inside userSignup")
        Axios.post("http://localhost:3001/create_user",{
            username: username,
            password: password,
            email: email,
            name:name,
        }).then((response)=>{
            console.log(response.data)

            //alert("Your account has been created successfully")
            //navigate('/UserLogin')
        })
    }

    return (
        <section>
        <div className="Signup">
            <div className="col-1">
            <h2>Sign Up</h2>
            <span>Register and Upload Your Thesis</span>

            <form id='form' className='flex flex-col my-5' on onSubmit={handleSubmit(onSubmit)}>

                <input type="text" {...register("username")} placeholder='username' onChange={(event)=> {
                    setUsername(event.target.value)
                }}/>
                <input type="password" {...register("password")}placeholder='password' onChange={(event)=>{
                    setPassword(event.target.value)
                }}/>

                <input type="password"{...register("confirmpwd")} placeholder='confirm password'/>

                <input type="text"{...register("name")} placeholder='Name' onChange={(event)=>{
                    setName(event.target.value)
                }} />

                <input type="text" {...register("email", {required:true})}placeholder='email' onChange={(event)=>{
                    setEmail(event.target.value)
                }} />
                {errors.email?.type === "required" && "Email is required"}



                <button className='btn' onClick={userSignup}>Sign Up</button>

            </form>



            </div>
            <div className="col-2">
                <img src={signup} alt="" />
                </div>

          
        </div>
    </section>
    )
  
}
