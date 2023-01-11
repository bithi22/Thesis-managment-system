import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import "./dashboard.scss"
import Axios from 'axios'
import { useEffect } from "react";
import MaterialTable from "material-table";

const Dashboard = () => {

  var [applied_projects,setApplied_Projects] = useState([]);

  const columns = [
    {title: "Username", field: "username"},
    {title: "Password", field: "password"},
    {title: "Email", field: "email"},
    {title: "Name", field: "name"}
  ]

  

  const getProjects = () =>{
    console.log("Inside useEffect Dashboard")
      Axios.post("http://localhost:3001/getApplied_Projects",
      ).then((response)=>{
          console.log("Success in getting applied_projects")
          console.log(response)
          setApplied_Projects(response.data)
          console.log(applied_projects)
      })
  }

  useEffect(() => {
    console.log("Yes useEffect called")
    getProjects();
  }, []);


  return (
    <div className= "dashboard">
      <Sidebar/>
      <div className="dashboardContainer"> <Navbar/>
      <div className="listContainer">
        <div className="listTitle">
          Applied_Projects
          <button className='btn' onClick={getProjects}>Get Projects</button>

        </div>
        <MaterialTable
                title="Student List"
                data={applied_projects}
                columns={columns}                
              />
      </div>
       </div>
    </div>
  );
}

export default Dashboard;
