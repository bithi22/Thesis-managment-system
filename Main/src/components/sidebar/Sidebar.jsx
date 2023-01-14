import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import {Link} from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';

const Sidebar = () => {
  return (
    <div className= "sidebar">
      <div className ="top"> <span className="logo"> logo </span> </div>
      <hr/>
      <div className="center">
        <ul>
          <Link to = "/Admin_Dashboard">
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
          </Link>

          
          <Link to = "/Student_List">
            <li>
                <PersonAddAltIcon className="icon"/>
                <span>Student List</span>
            </li>
          </Link>

          
          <Link to = "/Teacher_List">
            <li>
                <PersonAddAltIcon className="icon"/>
                <span>Teachers List</span>
            </li>
          </Link>

          <Link to = "/update_student">
            <li>
                <PersonAddAltIcon className="icon"/>
                <span>Update Students</span>
            </li>
          </Link>
          <Link to = "/update_teacher">
            <li>
                <PersonAddAltIcon className="icon"/>
                <span>Update Teachers</span>
            </li>
          </Link>
            <Link to = "/Upload_Projects">
            <li>
                <DescriptionIcon className="icon"/>
                <span>Applied Projects</span>
            </li>
            </Link>
            <Link to = "/Admin">
            <li>
                <PersonAddAltIcon className="icon"/>
                <span>Update Admin</span>
            </li>
            </Link>
            
            <Link to = "/Admin_List">
            <li>
                <PersonAddAltIcon className="icon"/>
                <span>Admin List</span>
            </li>
            </Link>
            <Link to = "/">
            <li>
                <PersonAddAltIcon className="icon"/>
                <span>Logout</span>
            </li>
            </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar; 
