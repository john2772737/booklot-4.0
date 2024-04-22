import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Footer from '../components/footer';
import  DrawerAppBar  from '../components/navbar';
import Sidebar from '../components/sidebar';



function Main({Logouts}) {



  return (
    <div>
     <DrawerAppBar/>
     
      <Sidebar/>
      <Outlet/>  
      <Footer />
    </div>
  );
}

export default Main;
