import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import Footer from '../components/footer';
import Navbar from '../components/navbar';

function Main() {
  return (
    <div>
      <Navbar />
      {/* Use Links instead of Routes */}
      <Link to="/">Dashboard</Link>
      <Link to="listseller">List Seller</Link>
      <Link to="manager">List Manager</Link>
      {/* Render components based on route in App.js or equivalent */}
      <Outlet/>  
      <Footer />

    
    </div>
  );
}

export default Main;
