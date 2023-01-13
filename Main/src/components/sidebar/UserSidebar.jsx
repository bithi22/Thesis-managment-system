import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import {Link} from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';

const UserSidebar = () => {
  return (
    <div className= "sidebar">
      <div className ="top"> <span className="logo"> logo </span> </div>
      <hr/>
      <div className="center">
        <ul>
          <Link to = "/User_Dashboard">
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
          </Link>
            <Link to = "/Apply_for_Project">
            <li>
                <DescriptionIcon className="icon"/>
                <span>Upload Projects</span>
            </li>
            </Link>
            <li>
                <PersonAddAltIcon className="icon"/>
                <span>Admin</span>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default UserSidebar; 
