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
            <Link to = "/upload_Projects">
            <li>
                <DescriptionIcon className="icon"/>
                <span>Upload Projects</span>
            </li>
            </Link>
            <Link to="/Admin">
            <li>
                <PersonAddAltIcon className="icon"/>
                <span>Admin</span>
            </li>
            </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar; 
