import Navbar from "../../components/navbar/Navbar";
import "./applied_projects.scss"
import UserSidebar from "../../components/sidebar/UserSidebar";
import ThesisForm from "../../components/ThesisForm";



const Apply_for_Project = () => {

  return (
    <>
    <div className= "dashboard">
      <UserSidebar/>
      <div className="dashboardContainer"> <Navbar/>
      <div className="listContainer">
        
        <div>
        <ThesisForm/>    
        </div>
        
      </div>
       </div>
    </div>
    </>
  );
}

export default Apply_for_Project;
