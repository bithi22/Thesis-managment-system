import React from 'react'
import Navbar from '../components/Navbar'
import LoginStyle from './LoginStyle.css'
import {useForm} from 'react-hook-form'



const AdminLogin = ()=> {
   
  return (
    <div>
        <Navbar/>
    

        <section>
        <div className="Login">
            <div className="inside">
            <h2>Login</h2>
            <span>Login and keep track of your profile</span>

            <form id='LoginForm' className='LoginInfo LoginPass my-5'>

                <input type="text"  placeholder='username'/>
                <input type="text" placeholder='password'/>

                <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Keep me Logged in
      </label>
    </div>



                <button className='btn'>Login</button>

            </form>



            </div>
           

          
        </div>
    </section>
    </div>

  )
}

export default AdminLogin
