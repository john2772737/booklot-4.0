// Main.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import DrawerAppBar from '../components/navbar';
import Sidebar from '../components/sidebar';
import './Main.css'; // Import CSS file for styling

function Main({ Logouts }) {
  return (
    <div>
      <DrawerAppBar />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Outlet /> {/* Place Outlet here */}
       
        </div>
      </div>
    </div>
  );
}

export default Main;
