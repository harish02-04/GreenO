import React from 'react';
import { useState } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import "../css/shome.css";
import Imgup from '../components/ImgUp';
import Past from '../components/Past';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Shome = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <ToastContainer/>
 
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/*<div style={{padding:50}}><Imgup /></div>*/}
   
      
    </div>
  )
}
export default Shome;
