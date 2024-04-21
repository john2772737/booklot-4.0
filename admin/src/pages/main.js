import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Footer from '../components/footer';
import CustomNavbar from '../components/navbar';
import Sidebar from '../components/sidebar';

function Main() {
  const links = [
    { to: '/main/dashboard', text: 'Dashboard' },
    { to: '/main/listseller', text: 'List Seller' },
    { to: '/main/manager', text: 'List Manager' }
  ];

  return (
    <div>
      <CustomNavbar brand="Booklot" search="Search" user="Admin/Manager" settings="Settings" links={links} />
      <Sidebar links={links} /> {/* Render the Sidebar component */}
      <Outlet/>  
      <Footer />
    </div>
  );
}

export default Main;
