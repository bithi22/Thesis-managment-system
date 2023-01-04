import React, { PureComponent } from 'react'
import FormStyle from './FormStyle.css'
import signup from '../assets/signup.webp'
import {useForm} from 'react-hook-form'

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    const handleSignup=(event)=>
    {
        
    }


  
    
    return (
        <section>
        <div className="Signup">
            <div className="col-1">
            <h2>Sign Up</h2>
            <span>Register and Upload Your Thesis</span>

            <form id='form' className='flex flex-col my-5' on onSubmit={handleSubmit(onSubmit)}>

                <input type="text" {...register("username")} placeholder='username'/>
                <input type="text" {...register("password")}placeholder='password'/>

                <input type="text"{...register("confirmpwd")} placeholder='confirm password'/>

                <input type="text" {...register("email", {required:true})}placeholder='email'/>
                {errors.email?.type === "required" && "Email is required"}



                <button className='btn' onClick={handleSignup}>Sign Up</button>

            </form>



            </div>
            <div className="col-2">
                <img src={signup} alt="" />
                </div>

          
        </div>
    </section>
    )
  
}
