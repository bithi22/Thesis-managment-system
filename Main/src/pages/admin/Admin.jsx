import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./admin.scss";
import AdminForm from "../../components/AdminForm";


const Admin = () => {

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboardContainer">
          {" "}
          <Navbar />
          <div className="listContainer">
            <div className="App">
              <AdminForm/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
