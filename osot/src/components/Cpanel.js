import React from 'react';
import { Card } from 'antd';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Cpanel = () => {
  return (
    <div>
    <div className="card-panel" style={{padding:20}} >
      
      
        <Card className='card-container' style={{height:340,backgroundColor:'#ACE640'}}>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <span>
                    <h1 style={{fontFamily:'cursive',fontSize:40}}>Enrolled</h1>
                    <i class="fas fa-user-friends fa-6x" style={{ marginRight: '100px' ,fontSize:110}}></i>
                    <h4 class="card-title" style={{marginTop:20}}>2,787</h4>
                </span>
                <div style={{ flex: 1 }}>
                    <div class="col-2 d-flex align-items-center" style={{marginBottom:50,marginLeft:20}}>
                    <CircularProgressbar
  value={55}
  text={`${55}%`}
  styles={{
    root: { width: '260px', backgroundColor: '#848883' ,borderRadius:'50%'},
    path: { stroke: 'black' },
    text: { fontSize: '28px', fill: 'black',fontFamily:'cursive' }
  }}
/>
                    </div>
                </div>
            </div>
        </Card>
       
       
       <Card className='card-container' style={{height:340,backgroundColor:'#ACE640'}}>
       <div className="container user" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="user-card">

          <div className="user-info">
            <div class="col-2 d-flex align-items-center" >
           
              <span class="card-category2" style={{fontSize:30}}>
                R.M.K ENGINEERNING COLLEGE
                <br />
                <span class="card-category3">
                Thiruvallur, Tamil Nadu.
                <br />
                Aicte ID: 1-36492617781
                </span>
              </span>
            
            </div>
            
          </div>
          
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/RMK_Engineering_College.gif" width={250} style={{marginLeft:90,marginTop:100}}></img>
        </div>
       </Card>

      

       </div>
      
    </div>
  )
}

export default Cpanel;
