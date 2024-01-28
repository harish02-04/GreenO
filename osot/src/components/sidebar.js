import React, { useEffect, useState } from 'react'
import Header from './header';
import Imgup from './ImgUp';
import Past from './Past';
import Home from './Home';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { browserLocalPersistence } from 'firebase/auth';
function Sidebar({openSidebarToggle, OpenSidebar}) {
    const navigate=useNavigate();
    const [nav,setnav]=useState({Home:"True",Act:"False",Uimg:"False"});
    const HandleNav=(type)=>{
       const p={Home:"False",Act:"False",Uimg:"False"};
       if(type==="Act"){
        p.Act="True";
       }
       else if(type==="Uimg"){
        p.Uimg="True";
       }
       else if(type==="Home"){
        p.Home="True";
       }
       setnav(p);
    }
    const handlelogOut=()=>{
        toast.warning("Logging out..", {
            position: toast.POSITION.TOP_CENTER,
          });

          // Redirect to "/shome" after 3 seconds
          setTimeout(() => {
            localStorage.clear();
            navigate("/");
          }, 2000);
    }
    useEffect(() => {
        const btn_menu = document.querySelector(".btn-menu");
        const side_bar = document.querySelector(".sidebar");
      
        const handleClick = () => {
          side_bar.classList.toggle("expand");
          changebtn();
        };
      
        btn_menu.addEventListener("click", handleClick);
      
        function changebtn() {
          if (side_bar.classList.contains("expand")) {
            btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
          } else {
            btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
          }
        }
      
        // Cleanup the event listener when the component unmounts
        return () => {
          btn_menu.removeEventListener("click", handleClick);
        };
      }, []);
      
  return (
    <div>
        
        <section class="sidebar">
        
    <div class="nav-header">
      <p class="logo" style={{fontSize:30,color:'white'}}>🍃𝑮𝒓𝒆𝒆𝒏𝑶</p>
      <i class="bx bx-menu-alt-right btn-menu" style={{color:'white'}}></i>
      <br/>
      
    </div>
    <ul class="nav-links">
    <li onClick={()=>HandleNav("Home")} style={{height:70}}>
        <a href="#">
        <i class="uil uil-user"></i>
          <span class="title" style={{fontFamily:'cursive',fontSize:20}}>Mr.{localStorage.getItem("sname")}</span>
        </a>
        <span class="tooltip">Logged in</span>
      </li>
      <li onClick={()=>HandleNav("Home")}>
        <a href="#">
        <i class="uil uil-home"></i>
          <span class="title">Home</span>
        </a>
        <span class="tooltip">Home</span>
      </li>
      <li onClick={()=>HandleNav("Act")}>
        <a href="#">
        <i class="uil uil-airplay"></i>
          <span class="title">My Activities</span>
        </a>
        <span class="tooltip">My Activities</span>
      </li>
      <li onClick={()=>HandleNav("Uimg")}>
        <a href="#">
        <i class="uil uil-camera-plus"></i>
          <span class="title">Upload Snaps</span>
        </a>
        <span class="tooltip">Upload Snaps</span>
      </li>
      <li onClick={()=>handlelogOut()}>
        <a href="#">
        <i class="uil uil-power"></i>
          <span class="title">Logout</span>
        </a>
        <span class="tooltip">Logout</span>
      </li>
    </ul>
  </section>
  <section class="home">
  {nav.Home==="True" && <Home/>}
      {nav.Uimg==="True" && <Imgup/>}
      {nav.Act==="True" && <Past meth={HandleNav}/>}
    </section>
 </div>
    
  )
}

export default Sidebar;