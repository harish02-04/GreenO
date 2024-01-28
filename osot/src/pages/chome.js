import React from 'react';
import { Cside } from '../components/Cside';
import { Progress, Space, Tooltip } from 'antd';
import { red, green , grey, gold} from '@ant-design/colors';
import "../css/chome.css";
import { useState } from 'react';
import Stats from '../components/Stats';
import Cpanel from '../components/Cpanel';
import Ctable from '../components/Ctable';


const Chome = () => {
   const [nav,snav]=useState("Home");
    
    return (
       <>
     <div className='chome'>

      <Cside snav={snav}/>
      {nav==="Statistics" && <Stats/>}
      {(nav==="Home" || nav===localStorage.getItem("fname")) && <div className='ContentOfPage'>
      
      <br/>
     
  <div className="guidelines-box" style={{marginBottom:'30px',marginLeft:'30px',width:1300,backgroundColor:'#ACE640'}} >
  <h2 style={{fontSize:50,marginRight:80}}>🍃𝑮𝒓𝒆𝒆𝒏𝑶</h2>
  <p style={{fontFamily:'cursive'}}>"Keep Green and Clean" - A Sustainable Campus Initiative</p>
  <p style={{fontFamily:'cursive'}}>
    College play's a pivotal role in championing sustainability . Our responsibilities include fostering environmental awareness,
    implementing eco-friendly practices, and ensuring the campus remains clean
    and green throught the Country.
  </p>
  <p style={{fontFamily:'cursive'}}>
    {" "}
    Collaborate with eco-friendly organizations, organize
    green events, and monitor green spaces. Your accuracy in reporting and
    effective communication channels are essential. Together, let's contribute
    to the long-term sustainable development goals of our campus.
  </p>
    </div>
    <Cpanel />
  </div>}
      
   

    </div>

    
     </>   
  );
};
export default Chome;