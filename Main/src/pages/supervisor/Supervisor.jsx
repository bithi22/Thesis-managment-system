import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./supervisor.scss";
import TeacherForm from "../../components/TeacherForm";


const Teacher = () => {

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboardContainer">
          {" "}
          <Navbar />
          <div className="listContainer">
            <div className="App">
              <TeacherForm/>              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teacher;
