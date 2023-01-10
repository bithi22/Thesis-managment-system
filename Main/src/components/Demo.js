import React from 'react'
import Navbar from '../components/Navbar'
import Form from './Form'
import UserLoginForm from './UserLoginForm'


const Demo = ()=> {

    const handleSignup=(event)=>
    {
        console.log("Hello Worlds")
    }  

  return (
    <div>
        <Navbar/>
        <UserLoginForm/>
    </div>

  )
}

export default Demo