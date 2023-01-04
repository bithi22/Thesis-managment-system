import {React,useState} from 'react'
import './NavbarStyles.css';
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'


const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">CSEDU Thesis Archive</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/UserLogin">User</Link></li>
            <li><Link className="dropdown-item" to="/AdminLogin">Admin</Link></li>
    
            
          </ul>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/Register">Signup</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/">Contact</Link>
        </li>
      </ul>
      
      
    </div>
  
</nav>
    
    </>
    
   

  )
}

export default Navbar