import React, { useState } from "react";
import MaterialTable from "material-table";
import * as XLSX from "xlsx";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./student.scss";
import StudentForm from "../../components/StudentForm";


const Student = () => {

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboardContainer">
          {" "}
          <Navbar />
          <div className="listContainer">
            <div className="App">
              <StudentForm/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
