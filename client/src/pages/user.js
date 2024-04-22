import React from "react";
import { Outlet } from 'react-router-dom'; 
import Footer from "../components/footer";
function user() {
  return (
    <div className="user">
      <Outlet />
      <Footer />
    </div>
    
  );
}

export default user;
