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
import { NoMatch } from './components/NoMatch';
import Demo from './components/Demo';
import Dashboard from './pages/dashboard/Dashboard';
import Upload_Projects from './pages/projects/Applied_Projects';
import Student from './pages/student/Student';
import Teacher from './pages/supervisor/Supervisor';
import UserDashboard from './pages/dashboard/UserDashboard';
import Apply_for_Project from './pages/projects/Apply_for_Project';
import Pending_Projects from './pages/pending_projects/Pending_Projects';
import SupervisorList from './pages/supervisor/SupervisorList';
import StudentList from './pages/student/StudentList';
import AdminSupervisorList from './pages/supervisor/AdminSupervisorList';
import Admin from './pages/admin/Admin';
import AdminList from './pages/admin/AdminList';


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
      <Route path='/Demo' element={<Demo/>}/>
    </Routes>

    <Routes>
      <Route exact path='/UserLogin' element={<UserLogin/>}/>
    </Routes>

    <Routes>
      <Route exact path='/AdminLogin' element={<AdminLogin/>}/>
    </Routes>

    <Routes>
      <Route  path='*' element={<NoMatch/>}/>
    </Routes>

    <Routes>
      <Route  path='/Admin_Dashboard' element={<Dashboard/>}/>
    </Routes>

    
    <Routes>
      <Route  path='/User_Dashboard' element={<UserDashboard/>}/>
    </Routes>
    
    
    <Routes>
      <Route  path='/Apply_for_Project' element={<Apply_for_Project/>}/>
    </Routes>

    <Routes>
      <Route  path='/Upload_Projects' element={<Upload_Projects/>}/>
    </Routes>

    <Routes>
      <Route  path='/Pending_Projects' element={<Pending_Projects/>}/>
    </Routes>
    
    
    <Routes>
      <Route  path='/Supervisor_List' element={<SupervisorList/>}/>
    </Routes>
    
    
    <Routes>
      <Route  path='/Teacher_List' element={<AdminSupervisorList/>}/>
    </Routes>
    
    <Routes>
      <Route  path='/Student_List' element={<StudentList/>}/>
    </Routes>

    <Routes>
      <Route  path='/update_student' element={<Student/>}/>
    </Routes>

    
    <Routes>
      <Route  path='/update_teacher' element={<Teacher/>}/>
    </Routes>

    
    <Routes>
      <Route  path='/Admin' element={<Admin/>}/>
    </Routes>
    
    
    <Routes>
      <Route  path='/Admin_List' element={<AdminList/>}/>
    </Routes>

    <Routes>
      <Route path='/Footer' element={<Footer/>}/>
    </Routes>

   </>
    
    
  );
}

export default App;
