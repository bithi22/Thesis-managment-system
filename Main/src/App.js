import React from 'react'
//import {Routes, Route } from 'react-router';
import {
  Routes,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './routes/Home'
import Register from './components/Register'
import UserLogin from './components/UserLogin';
import AdminLogin from './components/AdminLogin';
import Footer from './components/Footer';


function App() {
  return (
    <>
    
    <Routes>
<Route path='/' element={<Home/>}/>
    </Routes>

    <Routes>
      <Route path='/Register' element={<Register/>}/>
    </Routes>

    <Routes>
      <Route exact path='/UserLogin' element={<UserLogin/>}/>
    </Routes>
    <Routes>
      <Route exact path='/AdminLogin' element={<AdminLogin/>}/>
    </Routes>

    <Routes>
      <Route path='/Footer' element={<Footer/>}/>
    </Routes>

   </>
    
    
  );
}

export default App;
