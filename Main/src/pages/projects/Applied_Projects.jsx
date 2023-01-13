import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./applied_projects.scss"
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
import Delete from '@material-ui/icons/Delete';
import Done from "@mui/icons-material/Done";

import { confirm } from "react-confirm-box";



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



const Upload_Projects = () => {

  

  var [applied_projects,setApplied_Projects] = useState([]);

  const columns = [
    {title: "Thesis_id", field:"thesis_id"},
    {title: "Title", field: "title",align: "center", render: rowData=><a href = {rowData.PDF}> {rowData.title} </a> },
    {title: "Course_id", field: "course_id",align: "center",emptyValue:()=><em> null </em> },
    {title: "Category", field: "category",align: "center"},
    {title: "Publication Year",field:"publication_year",align: "center"},
    {title: "Submission Date",field: "date_of_submission",type:"date"},
    {title: "Type",field:"type",align: "center"},
    {title: "Publication",field:"publication",align: "center", emptyValue:()=><em> None </em>}
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

  
  const rejectThesis = (rowData) =>{
    console.log("Inside accept author")
    Axios.post("http://localhost:3001/reject_thesis",{
      thesis_id: rowData.thesis_id
    }).then(()=>{
        console.log("Success in reject thesis")
          getProjects();
        })  
  }

  
  const acceptSupervisor = (rowData) =>{
    console.log("Inside accept supervisor")
    Axios.post("http://localhost:3001/accept_supervisor",{
      thesis_id: rowData.thesis_id
    }).then(()=>{
        console.log("Success in accept supervisor")
          rejectThesis(rowData);
        })  
  }

  
  const acceptAuthor = (rowData) =>{
    console.log("Inside accept author")
    Axios.post("http://localhost:3001/accept_author",{
      thesis_id: rowData.thesis_id
    }).then(()=>{
        console.log("Success in accept author")
          acceptSupervisor(rowData);
        })  
  }

  useEffect(() => {
    console.log("Yes useEffect called")
    getProjects();
  }, []);


  return (
    <>
    <div className= "dashboard">
      <Sidebar/>
      <div className="dashboardContainer"> <Navbar/>
      <div className="listContainer">
        
        <div>

        <MaterialTable
          icons={tableIcons}
          title= "Applied Projects"
          data = {applied_projects}
          columns = {columns}
          options={{
            filtering: true,
            fixedColumns: {
              right:10
            },
            
          }}
          actions={[
            {
              icon: Done,
              tooltip: 'Approve',
              onClick: async (event, rowData) => {
                const result = await confirm("Do you want to approve the thesis?");
                if (result) {
                  console.log("Inside yes for approve")
                  Axios.post("http://localhost:3001/accept_thesis",{
                      thesis_id: rowData.thesis_id
                  }).then(()=>{
                      console.log("Success in accept thesis");
                      acceptAuthor(rowData);
                  })

                  return;
              }
              }
            },
            {
              icon: Delete,
              tooltip: 'Reject',
              onClick: async (event, rowData) => {
                const result = await confirm("Are you sure to reject the thesis?");
                if (result) {
                  console.log("Inside yes for reject")
                  Axios.post("http://localhost:3001/reject_thesis",{
                      thesis_id: rowData.thesis_id
                  }).then(()=>{
                      console.log("Success in reject thesis")
                      getProjects();
                  })

                  return;
              }
              }
            }
          ]}
          
          />
        </div>
        
      </div>
       </div>
    </div>
    </>
  );
}

export default Upload_Projects;
