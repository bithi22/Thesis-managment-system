import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./pending_projects.scss"
import Axios from 'axios'
import { useEffect } from "react";
import MaterialTable from "material-table";

import { forwardRef } from 'react';

import AddBox from '@mui/icons-material/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import UserSidebar from "../../components/sidebar/UserSidebar";
import { Button } from "@mui/material";



const tableIcons = {
    
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };



const Pending_Projects = () => {

  

  var [applied_projects,setApplied_Projects] = useState([]);
  const [student_id,setStudent_id] = useState("")

  const columns = [
    {title: "Thesis_id", field:"thesis_id"},
    {title: "Title", field: "title",align: "center", render: rowData=><a href = {rowData.PDF_Link}> {rowData.title} </a> },
    {title: "Course_id", field: "course_id",align: "center",emptyValue:()=><em> null </em> },
    {title: "Category", field: "category",align: "center"},
    {title: "Publication Year",field:"publication_year",align: "center"},
    {title: "Submission Date",field: "date_of_submission",type:"date"},
    {title: "Type",field:"type",align: "center"},
    {title: "Publication",field:"publication",align: "center", emptyValue:()=><em> None </em>},
    {title: "Authors", field: "authors"},
    {title: "Supervisors",field: "supervisors"},
    {title: "Keywords" , field: "keywords"}
  ]


  const getProjects = () =>{
    console.log("Inside user getProjects")
      Axios.post("http://localhost:3001/getPending_Projects",{
        student_id: student_id
      }
      ).then((response)=>{
          console.log("Success in getting pending_projects")
          console.log(response)
          setApplied_Projects(response.data)
          console.log(applied_projects)
      })
  }


  return (
    <>
    <div className= "dashboard">
      <UserSidebar/>
      <div className="dashboardContainer"> <Navbar/>
      <button className='btn' onClick={getProjects}>Get Projects</button>
      <input type= "text" placeholder="Enter your student_id" onChange={(event)=> {
                    setStudent_id(event.target.value)
                }}>

      </input>

      <div className="listContainer">
        
        <div>
        <MaterialTable
          icons={tableIcons}
          title= "Pending Projects"
          data = {applied_projects}
          columns = {columns}
          options={{
            filtering: true,
            fixedColumns: {
              right:12
            },
            
          }}          
          />
        </div>
        
      </div>
       </div>
    </div>
    </>
  );
}

export default Pending_Projects;
