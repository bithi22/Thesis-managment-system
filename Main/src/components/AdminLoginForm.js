import React, { PureComponent, useState, useEffect } from 'react'
import FormStyle from './FormStyle.css'
import signup from '../assets/signup.webp'
import {useForm} from 'react-hook-form'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function AdminLoginForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
    let navigate = useNavigate();

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    var [admin,setAdmin] = useState([])

    
    const adminLogin = (event) =>{
        console.log("Inside adminLogin")
        console.log(username)
        console.log(password)
        Axios.post("http://localhost:3001/admin_login",{
            username: username,
            password: password,
        }).then((response)=>{
            console.log("Success in admin login")
            console.log(response)
            admin = response.data
            if(admin.length)
            {
                console.log("It has data")
                navigate('/Admin_Dashboard')
            }
            else
            {
              console.log("Empty data")
            }
        })
    }

    return (
        <section>
        <div className="Signup">
            <div className="col-1">
            <h2>Admin Login</h2>
            <span>Login and keep track of your profile</span>

            <form id='form' className='flex flex-col my-5' on onSubmit={handleSubmit(onSubmit)}>

                <input type="text" {...register("username")} placeholder='username' onChange={(event)=> {
                    setUsername(event.target.value)
                }}/>
                <input type="password" {...register("password")}placeholder='password' onChange={(event)=>{
                    setPassword(event.target.value)
                }}/>

                <button className='btn' onClick={adminLogin}>Sign Up</button>

            </form>
        </div>          
        </div>
    </section>
    )
  
}
