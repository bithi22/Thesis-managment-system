import React, { PureComponent, useState, useEffect } from 'react'
import FormStyle from './FormStyle.css'
import signup from '../assets/signup.webp'
import {useForm} from 'react-hook-form'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function UserLoginForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
    let navigate = useNavigate();

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    var [user,setUser] = useState([])

    
    const userSignup = (event) =>{
        console.log("Inside userSignup")
        console.log(username)
        console.log(password)
        Axios.post("http://localhost:3001/user_login",{
            username: username,
            password: password,
        }).then((response)=>{
            console.log("Success in user login")
            console.log(response)
            user = response.data
            if(user.length)
            {
                console.log("It has data")
                navigate('/User_Dashboard')
            }
            else
            {
              console.log("Empty data")
              alert("Credentials didn't match")
            }
        })
    }

    return (
        <section>
        <div className="Signup">
            <div className="col-1">
            <h2>User Login</h2>
            <span>Login and keep track of your profile</span>

            <form id='form' className='flex flex-col my-5' on onSubmit={handleSubmit(onSubmit)}>

                <input type="text" {...register("username")} placeholder='username' onChange={(event)=> {
                    setUsername(event.target.value)
                }}/>
                <input type="password" {...register("password")}placeholder='password' onChange={(event)=>{
                    setPassword(event.target.value)
                }}/>

                <button className='btn' onClick={userSignup}>Sign Up</button>

            </form>
        </div>          
        </div>
    </section>
    )
  
}
